import { ObjectId } from "mongoose";

interface Address {
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
  _id: string;
}

export interface User {
  name: string;
  email: string;
  password: string;
  number: number | string;
  addresses: Address[];
  isRestaurantOwner: boolean;
  isAdmin: boolean;
  isSuspended: boolean;
  _id: ObjectId;
}
