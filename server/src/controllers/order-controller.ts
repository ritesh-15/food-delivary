import { NextFunction, Request, Response } from "express";
import { ObjectId } from "mongoose";
import Razorpay from "razorpay";
import { ProductInterface } from "../interfaces/Product-interface";
import { User } from "../interfaces/User-Interface";
import { RAZORPAY_KEY_ID, RAZORPAY_SECRET } from "../keys/secrets";
import Order from "../models/Order-model";
import ErrorHandler from "../services/Error-Handler";
import { generateOrderId } from "../util/generateOrderId";
import { validateNewOrderBody } from "../validation/order-validations";

interface NewOrderBody {
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
  restaurant: ObjectId;
}

class OrderController {
  static async makeOrder(req: Request, res: Response, next: NextFunction) {
    const { amount } = req.body;

    if (!amount || amount <= 0) return next(ErrorHandler.unProcessebleEntity());

    try {
      const instance = new Razorpay({
        key_id: RAZORPAY_KEY_ID,
        key_secret: RAZORPAY_SECRET,
      });

      const options = {
        amount: amount * 100, // amount in the smallest currency unit
        currency: "INR",
        receipt: generateOrderId("recipt"),
      };

      const order = await instance.orders.create(options);
      return res.json({ ok: true, order });
    } catch (err) {
      return next(ErrorHandler.serverError());
    }
  }

  static async newOrder(req: Request, res: Response, next: NextFunction) {
    const {
      addressDetails,
      paymentDetails,
      products,
      restaurant,
    }: NewOrderBody = req.body;
    const activeUser = <User>req.user;

    try {
      await validateNewOrderBody.validateAsync(req.body);
    } catch (error: any) {
      console.log(error.message);
      return next(ErrorHandler.unProcessebleEntity());
    }

    try {
      const body = {
        addressDetails,
        paymentDetails,
        products,
        user: activeUser._id,
        restaurant,
      };

      const order = await Order.create(body);

      return res.json({ ok: true, order });
    } catch (error) {
      return next(ErrorHandler.serverError());
    }
  }
}

export default OrderController;
