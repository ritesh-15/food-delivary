import { ObjectId } from "mongoose";
import { User } from "./User-Interface";

export interface ApplicationInterface {
  _id: ObjectId;
  createdAt: Date;
  restaurantID: string;
  updateAt: Date;
  userId: User;
  isAgreed: boolean;
  status: string;
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
      url: string;
      fileType: string;
      uploadedAt: Date;
    };
    foodAuthorityCertificate: {
      url: string;
      fileType: string;
      uploadedAt: Date;
    };
  };
  images: [
    {
      url: string;
      fileType: string;
    }
  ];
  rejectionDetails?: {
    reason: string;
    message: string;
    geneteatedAt: Date;
  };
}
