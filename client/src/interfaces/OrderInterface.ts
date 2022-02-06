import { ProductInterface } from "./ProductInterface";
import { UserInterface } from "./UserInterface";

export interface OrderInterface {
  user: UserInterface;
  products: {
    product: ProductInterface;
    quantity: number;
  }[];
  paymentDetails: {
    amount: number;
    mode: string;
    razorpayOrderId: string;
    razorpayPaymentId: string;
    razorpaySignature: string;
    paymentStatus: string;
    paidAt: Date;
  };
  addressDetails: {
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
    landmark: string;
    _id: string;
  };
  _id: string;
  orderId: string;
  createdAt: Date;
  updatedAt: Date;
  orderStatus: string;
  restaurant: string;
}
