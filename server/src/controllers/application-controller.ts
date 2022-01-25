import { application, NextFunction, Request, Response } from "express";
import ErrorHandler from "../services/Error-Handler";
import { newAplicationValidation } from "../validation/applicationValidation";
import Application from "../models/applications-modal";
import { APP_BASE_URL } from "../keys/secrets";
import { User as UserInterface } from "../interfaces/User-Interface";

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
      console.log(error.message);
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
    const { id } = req.params;

    if (!id) return next(ErrorHandler.badRequest());

    try {
      const application = await Application.findById(id);

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
    const { id } = req.params;

    if (!body || !id) return next(ErrorHandler.badRequest());

    try {
      const foundApplication = await Application.findOne({ _id: id });

      if (!foundApplication)
        return next(ErrorHandler.notFound("Application not found!"));

      const updatedApplication = await Application.findOneAndUpdate(
        { _id: id },
        { $set: body },
        { new: true }
      );
      return res.json({ ok: true, application: updatedApplication });
    } catch (error) {
      return next(ErrorHandler.serverError());
    }
  }

  static async deleteApplication(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { id } = req.params;

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
