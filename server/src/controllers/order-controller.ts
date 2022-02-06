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
import Restaurant from "../models/restaurant-modal";

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

  static async getUserOrders(req: Request, res: Response, next: NextFunction) {
    const activeUser: User = <User>req.user;

    try {
      const orders = await Order.find({ user: activeUser._id })
        .populate("user", "-addresses")
        .populate("restaurant", "-documents")
        .populate("products.product");

      return res.json({ orders, ok: true });
    } catch (error) {
      return next(ErrorHandler.serverError());
    }
  }

  static async allOrders(req: Request, res: Response, next: NextFunction) {
    const activeUser: User = <User>req.user;

    try {
      const restaurant = await Restaurant.findOne({ userId: activeUser._id });

      if (!restaurant) return next(ErrorHandler.notFound());

      const orders = await Order.find({ restaurant: restaurant._id })
        .populate("user", "-addresses")
        .populate("restaurant", "-documents")
        .populate("products.product");

      return res.json({ orders, ok: true });
    } catch (error) {
      return next(ErrorHandler.serverError());
    }
  }

  static async singleOrder(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    if (!id) return next(ErrorHandler.unProcessebleEntity());

    try {
      const order = await Order.findOne({ orderId: id })
        .populate("user", "-addresses")
        .populate("restaurant", "-documents")
        .populate("products.product");

      if (!order) return next(ErrorHandler.notFound("Order not found!"));

      return res.json({ order, ok: true });
    } catch (error) {
      return next(ErrorHandler.serverError());
    }
  }

  // user
  static async cancelOrder(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    if (!id) return next(ErrorHandler.unProcessebleEntity());

    try {
      const order = await Order.findOne({ orderId: id })
        .populate("user", "-addresses")
        .populate("restaurant", "-documents")
        .populate("products.product");

      if (!order) return next(ErrorHandler.notFound("Order not found!"));

      order.orderStatus = "cancled";

      await order.save();

      return res.json({ order, ok: true });
    } catch (error) {
      return next(ErrorHandler.serverError());
    }
  }

  // restaurant
  static async changeOrderStatus(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { id } = req.params;
    const { status } = req.body;

    if (!id || !status) return next(ErrorHandler.unProcessebleEntity());

    try {
      const order = await Order.findOne({ orderId: id })
        .populate("user", "-addresses")
        .populate("restaurant", "-documents")
        .populate("products.product");

      if (!order) return next(ErrorHandler.notFound("Order not found!"));

      order.orderStatus = status;

      await order.save();

      return res.json({ order, ok: true });
    } catch (error) {
      return next(ErrorHandler.serverError());
    }
  }
}

export default OrderController;
