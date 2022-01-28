import { NextFunction, Request, Response } from "express";
import ErrorHandler from "../services/Error-Handler";
import {
  newAplicationValidation,
  updateApplicationValidation,
} from "../validation/applicationValidation";
import Application from "../models/applications-modal";
import { APP_BASE_URL } from "../keys/secrets";
import { User as UserInterface } from "../interfaces/User-Interface";
import Restaurant from "../models/restaurant-modal";
import EmailService from "../services/EmailService";
import { RestaurantInterface } from "../interfaces/Restaurant-interface";
import User from "../models/user-model";
import { unlink } from "fs/promises";
import path from "path";

interface NewApplicationBody {
  isAgreed: boolean;
  restaurantInfo: {
    name: string;
    famousFor: string;
    numberOfFoodProducts: number;
    foodType: string;
    minimumFoodPrice: number;
    numberOfDailyCustomers: number;
    email: string;
    number: number;
  };
  addressInfo: {
    cordinates: {
      lat: number;
      lng: number;
    };
    placeName: string;
    state: string;
    country: string;
    locality: string;
    pinCode: number;
    district: string;
  };
  documents: {
    applicantProof: {
      filename: string;
      fileType: string;
    };
    foodAuthorityCertificate: {
      filename: string;
      fileType: string;
    };
  };
  images: {
    filename: string;
    fileType: string;
  };
}

interface UpdateApplicationInterface {
  restaurantInfo?: {
    name?: string;
    famousFor?: string;
    numberOfFoodProducts?: number;
    foodType?: string;
    minimumFoodPrice?: number;
    numberOfDailyCustomers?: number;
    email?: string;
    number?: number;
  };
}

class ApplicationController {
  static async newApplication(req: Request, res: Response, next: NextFunction) {
    const {
      isAgreed,
      restaurantInfo,
      addressInfo,
      images,
      documents,
    }: NewApplicationBody = req.body;

    const currentUser: UserInterface = <UserInterface>req.user;

    try {
      await newAplicationValidation.validateAsync(req.body);
    } catch (error: any) {
      return next(ErrorHandler.unProcessebleEntity());
    }

    const newApplicationData = {
      userId: currentUser._id,
      restaurantInfo,
      addressInfo,
      isAgreed,
      restaurantID: `${new Date().getFullYear()}${Math.floor(
        Math.random() * 1e10
      )}`,
      documents: {
        applicantProof: {
          url: `${APP_BASE_URL}/uploads/${documents.applicantProof.filename}`,
          fileType: documents.applicantProof.fileType,
          filename: documents.applicantProof.filename,
        },
        foodAuthorityCertificate: {
          url: `${APP_BASE_URL}/uploads/${documents.foodAuthorityCertificate.filename}`,
          fileType: documents.foodAuthorityCertificate.fileType,
          filename: documents.foodAuthorityCertificate.filename,
        },
      },
      images: {
        url: `${APP_BASE_URL}/uploads/${images.filename}`,
        filename: images.filename,
        fileType: images.fileType,
      },
    };

    try {
      const isApplicationAlreadyExists = await Application.findOne({
        userId: currentUser._id,
      });

      if (isApplicationAlreadyExists)
        return next(ErrorHandler.badRequest("Application already exists!"));

      const application = await Application.create(newApplicationData);
      return res.json({ ok: true, application });
    } catch (error) {
      return next(ErrorHandler.serverError());
    }
  }

  static async getSingleApplication(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { id } = req.query;

    const currentUser: UserInterface = <UserInterface>req.user;

    try {
      let application;

      if (id) {
        application = await Application.findById(id).populate("userId");
      } else {
        application = await Application.findOne({
          userId: currentUser._id,
        }).populate("userId");
      }

      if (!application)
        return next(ErrorHandler.notFound("Application not found!"));

      return res.json({ ok: true, application });
    } catch (error) {
      return next(ErrorHandler.serverError());
    }
  }

  static async allApplications(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const applications = await Application.find().sort({ createdAt: -1 });
      return res.json({ ok: true, applications });
    } catch (error) {
      return next(ErrorHandler.serverError());
    }
  }

  static async updateApplication(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const body: UpdateApplicationInterface = req.body;
    const { id } = req.query;

    if (!body || !id) return next(ErrorHandler.badRequest());

    try {
      await updateApplicationValidation.validateAsync(req.body);
    } catch (error) {
      return next(ErrorHandler.unProcessebleEntity());
    }

    try {
      const foundApplication = await Application.findOne({ _id: id });

      if (!foundApplication)
        return next(ErrorHandler.notFound("Application not found!"));

      if (foundApplication.status === "pending")
        return next(ErrorHandler.badRequest("Application is under process!"));

      const updatedApplication = await Application.findOneAndUpdate(
        { _id: id },
        { $set: { ...body, status: "pending" } },
        { new: true }
      ).populate("userId");
      return res.json({ ok: true, application: updatedApplication });
    } catch (error: any) {
      return next(ErrorHandler.serverError());
    }
  }

  static async deleteApplication(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { id } = req.query;

    if (!id) return next(ErrorHandler.badRequest());

    try {
      const foundApplication = await Application.findOne({ _id: id });

      if (!foundApplication)
        return next(ErrorHandler.notFound("Application not found!"));

      const user = await User.findOne({ _id: foundApplication.userId });

      if (!user) return next(ErrorHandler.notFound("User not found!"));

      user.isRestaurantOwner = false;

      await user.save();

      await unlink(
        path.join(__dirname, `../uploads/${foundApplication.images.filename}`)
      );

      await unlink(
        path.join(
          __dirname,
          `../uploads/${foundApplication.documents.applicantProof.filename}`
        )
      );

      await unlink(
        path.join(
          __dirname,
          `../uploads/${foundApplication.documents.foodAuthorityCertificate.filename}`
        )
      );

      await Application.deleteOne({ _id: id });

      return res.json({ ok: true, deleted: true });
    } catch (error) {
      console.log(error);
      return next(ErrorHandler.serverError());
    }
  }

  // admin route
  static async updateStatus(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const { status, rejectionDetails } = req.body;

    if (!id) return next(ErrorHandler.badRequest("Id not found!"));

    if (!status) return next(ErrorHandler.unProcessebleEntity());

    try {
      let application = await Application.findOne({ _id: id });

      if (!application)
        return next(ErrorHandler.notFound("Application not found!"));

      if (application.status === "accepted")
        return next(
          ErrorHandler.badRequest("Application is already accepted!")
        );

      const isRestaurantFound = await Restaurant.findOne({
        userId: application.userId,
      });

      if (isRestaurantFound)
        return next(ErrorHandler.badRequest("Restaurant already exists!"));

      application = await Application.findOneAndUpdate(
        { _id: application._id },
        {
          $set: req.body,
        },
        { new: true }
      ).populate("userId");

      if (!application)
        return next(ErrorHandler.notFound("Application not found!"));

      if (application.status === "accepted") {
        // create new restaurant here

        const newRestaurantData = {
          restaurantInfo: application.restaurantInfo,
          addressInfo: application.addressInfo,
          documents: application.documents,
          userId: application.userId,
          status: "active",
          restaurantID: application.restaurantID,
          images: {
            filename: application.images.filename,
            fileType: application.images.fileType,
            url: `${APP_BASE_URL}/uploads/${application.images.filename}`,
          },
        };

        const restaurant: RestaurantInterface = await (
          await Restaurant.create(newRestaurantData)
        ).populate("userId");

        // update the user
        await User.updateOne(
          { _id: application.userId },
          {
            $set: {
              isRestaurantOwner: true,
            },
          },
          { new: true }
        );

        // send the acceptance mail to restaurant email address

        const mail = new EmailService(
          `${restaurant.restaurantInfo.email}`,
          "Application of restaurant accepted successfully!",
          `<h1>Hello ${restaurant.userId.name},</h1>
          <p>Your application having application id ${application._id} has been accepted succesfully. We have genereated new restaurant id for you ${restaurant.restaurantID}. You can login now and check your restaurant dashboard. Now you can add your restaurant food products and taking delivary.</p>
          `
        );

        await mail.send();
      }

      return res.json({ ok: true, application });
    } catch (error) {
      console.log(error);

      return next(ErrorHandler.serverError());
    }
  }
}

export default ApplicationController;
