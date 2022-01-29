import { ObjectId } from "mongoose";
import { RestaurantInterface } from "./Restaurant-interface";

export interface ProductInterface {
  name: string;
  _id: ObjectId;
  restaurant: RestaurantInterface;
  type: string;
  price: number;
  description: string;
  menu: string;
  image: {
    url: string;
    filename: string;
  };
  createdAt: Date;
}
