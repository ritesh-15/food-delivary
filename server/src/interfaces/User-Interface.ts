import { ObjectId } from "mongoose";

interface Address {
  city: string;
  pinCode: number | string;
  landmark: string;
  street: string;
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
