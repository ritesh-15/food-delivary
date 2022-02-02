import { NextFunction, Request, Response } from "express";
import Razorpay from "razorpay";
import ErrorHandler from "../services/Error-Handler";

class OrderController {
  static async newOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const instance = new Razorpay({
        key_id: "rzp_test_jihiG2CSuWt9Vl",
        key_secret: "oNmj8SBDnaVwucxw0xIEq2OP",
      });

      const options = {
        amount: 100, // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_445155",
      };

      instance.orders.create(options, function (err: any, order: any) {
        console.log(order);
        return res.json({ order });
      });
    } catch (err) {
      return next(ErrorHandler.serverError());
    }
  }
}

export default OrderController;
