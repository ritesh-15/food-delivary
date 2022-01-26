import { ObjectId } from "mongoose";

export interface RestaurantInterface {
  _id: ObjectId;
  createdAt: Date;
  restaurantID: string;
  updateAt: Date;
  userId: ObjectId;
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
  documents: [
    {
      nameOfDocument: string;
      uploadStatus: boolean;
      filePath: string;
      uploadedAt: Date;
      url: string;
    }
  ];
  ratings?: [
    {
      userId: ObjectId;
      ratings: number;
      review: string;
      createdAt: Date;
    }
  ];
}
