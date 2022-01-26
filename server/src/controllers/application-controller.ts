import { NextFunction, Request, Response } from "express";
import ErrorHandler from "../services/Error-Handler";
import { newAplicationValidation } from "../validation/applicationValidation";
import Application from "../models/applications-modal";
import { APP_BASE_URL } from "../keys/secrets";
import { User as UserInterface } from "../interfaces/User-Interface";
import Restaurant from "../models/restaurant-modal";

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

  documents: [
    {
      filename: string;
      destination: string;
      nameOfDocuement: string;
      filepath: string;
    }
  ];
}

interface UpdateApplicationInterface {
  isAgreed?: boolean;
  status?: string;
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
  addressInfo?: {
    cordinates?: {
      lat?: number;
      lng?: number;
    };
    placeName?: string;
    state?: string;
    country?: string;
    locality?: string;
    pinCode?: number;
    district?: string;
  };
  documents?: [
    {
      filename: string;
      destination: string;
      nameOfDocuement: string;
      filepath: string;
    }
  ];
}
class ApplicationController {
  static async newApplication(req: Request, res: Response, next: NextFunction) {
    const {
      isAgreed,
      restaurantInfo,
      addressInfo,
      documents,
    }: NewApplicationBody = req.body;

    const activeUser: UserInterface = <UserInterface>req.user;

    try {
      await newAplicationValidation.validateAsync({
        isAgreed,
        restaurantInfo,
        documents,
        addressInfo,
      });
    } catch (error: any) {
      return next(ErrorHandler.badRequest());
    }

    const data = {
      isAgreed,
      restaurantInfo,
      addressInfo,
      documents: documents.map((document) => {
        return {
          filePath: document.filepath,
          url: `${APP_BASE_URL}/uploads/${document.filename}`,
          uploadedAt: new Date(Date.now()),
          uploadStatus: true,
          nameOfDocument: document.nameOfDocuement,
        };
      }),

      userId: activeUser._id,
      restaurantID: `RS${new Date(Date.now()).getFullYear()}${Math.floor(
        Math.random() * 1e5
      )}`,
      status: "pending",
    };

    try {
      const isApplicationAlreadyExits = await Application.findOne({
        userId: activeUser._id,
      });

      if (isApplicationAlreadyExits)
        return next(ErrorHandler.badRequest("Application already exits!"));
      const newApllication = await Application.create(data);
      return res.json({ ok: true, application: newApllication });
    } catch (error) {
      console.log(error);
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
      const applications = await Application.find();
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
    const currentUser = <UserInterface>req.user;

    if (!body || !id) return next(ErrorHandler.badRequest());

    try {
      const foundApplication = await Application.findOne({ _id: id });

      if (!foundApplication)
        return next(ErrorHandler.notFound("Application not found!"));

      if (foundApplication.status === "pending")
        return next(ErrorHandler.badRequest("Application is under process!"));

      if (body.status === "accepted") {
        // create a new restaurant if status is accepted

        const isRestaurantFound = await Restaurant.findOne({
          userId: currentUser._id,
        });

        if (isRestaurantFound)
          return next(ErrorHandler.badRequest("Restaurant already exists!"));

        const newRestaurantData = {
          restaurantInfo: foundApplication.restaurantInfo,
          addressInfo: foundApplication.addressInfo,
          documents: foundApplication.documents,
          userId: currentUser._id,
          status: "active",
          restaurantID: foundApplication.restaurantID,
        };

        await Restaurant.create(newRestaurantData);
      }

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

      await Application.deleteOne({ _id: id });

      return res.json({ ok: true, deleted: true });
    } catch (error) {
      return next(ErrorHandler.serverError());
    }
  }
}

export default ApplicationController;
