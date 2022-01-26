import { ObjectId } from "mongoose";
import { User } from "../interfaces/User-Interface";

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

class UserDto {
  name: string;
  email: string;
  number: number | string;
  addresses: Address[];
  isRestaurantOwner: boolean;
  isAdmin: boolean;
  isSuspended: boolean;
  _id: ObjectId;

  constructor(user: User) {
    this.name = user.name;
    this.email = user.email;
    this.addresses = user.addresses;
    this.number = user.number;
    this.isRestaurantOwner = user.isRestaurantOwner;
    this.isAdmin = user.isAdmin;
    this.isSuspended = user.isSuspended;
    this._id = user._id;
  }
}

export default UserDto;
