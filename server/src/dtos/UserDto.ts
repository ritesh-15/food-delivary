import { ObjectId } from "mongoose";
import { User } from "../interfaces/User-Interface";

interface Address {
  city: string;
  pinCode: number | string;
  landmark: string;
  street: string;
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
