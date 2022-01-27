import { UserInterface } from "./UserInterface";

export interface ApplicationInterface {
  _id: string;
  createdAt: Date;
  restaurantID: string;
  updateAt: Date;
  userId: UserInterface;
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
      filename: string;
    };
    foodAuthorityCertificate: {
      url: string;
      fileType: string;
      uploadedAt: Date;
      filename: string;
    };
  };
  images: [
    {
      url: string;
      fileType: string;
      filename: string;
    }
  ];
  rejectionDetails?: {
    reason: string;
    message: string;
    geneteatedAt: Date;
  };
}
