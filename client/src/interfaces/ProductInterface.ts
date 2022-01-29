import { RestaurantInterface } from "./RestaurantInterface";

export interface ProductInterface {
  name: string;
  _id: string;
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
