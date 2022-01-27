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
import fs from "fs";
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
      type: string;
    };
    foodAuthorityCertificate: {
      filename: string;
      type: string;
    };
  };
  images: [
    {
      filename: string;
      type: string;
    }
  ];
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

    try {
      await newAplicationValidation.validateAsync(req.body);
    } catch (error: any) {
      console.log(error.message);
      return next(ErrorHandler.unProcessebleEntity());
    }

    console.log(req.body);

    const newApplicationData = {
      restaurantInfo,
      addressInfo,
      isAgreed,
      restaurantId: `${new Date().getFullYear()}${Math.floor(Math.random())}`,
      documents,
      images,
    };

    try {
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

      if (id !== "undefined") {
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
        { $set: body },
        { new: true }
      );
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

      // foundApplication.documents.map((doc) => {
      //   fs.unlink(`${path.join(__dirname, doc.filePath)}`, (error) =>
      //     console.log(error)
      //   );
      // });

      await Application.deleteOne({ _id: id });

      return res.json({ ok: true, deleted: true });
    } catch (error) {
      return next(ErrorHandler.serverError());
    }
  }

  static async updateStatus(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const { status }: { status: string } = req.body;
    const currentUser: UserInterface = <UserInterface>req.user;

    if (!id) return next(ErrorHandler.badRequest("Id not found!"));

    if (!status) return next(ErrorHandler.unProcessebleEntity());

    try {
      const application = await Application.findOne({ _id: id });

      if (!application)
        return next(ErrorHandler.notFound("Application not found!"));

      if (application.status === "accepted")
        return next(
          ErrorHandler.badRequest("Application is already accepted!")
        );

      application.status = status;

      await application.save();

      if (application.status === "accepted") {
        // create new restaurant here
        const isRestaurantFound = await Restaurant.findOne({
          userId: currentUser._id,
        });

        if (isRestaurantFound)
          return next(ErrorHandler.badRequest("Restaurant already exists!"));

        const newRestaurantData = {
          restaurantInfo: application.restaurantInfo,
          addressInfo: application.addressInfo,
          documents: application.documents,
          userId: currentUser._id,
          status: "active",
          restaurantID: application.restaurantID,
        };

        const restaurant: RestaurantInterface = await (
          await Restaurant.create(newRestaurantData)
        ).populate("userId");

        // update the user
        await User.findOneAndUpdate(
          { _id: currentUser._id },
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
      return next(ErrorHandler.serverError());
    }
  }
}

export default ApplicationController;
