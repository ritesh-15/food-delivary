import { randomUUID } from "crypto";
import { model, Schema } from "mongoose";
import { OrderInterface } from "../interfaces/Order-interface";
import { generateOrderId } from "../util/generateOrderId";

const orderSchema = new Schema<OrderInterface>(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "users",
    },
    paymentDetails: {
      amount: {
        type: Number,
        required: true,
      },
      mode: {
        type: String,
        required: true,
      },
      razorpayOrderId: {
        type: String,
        required: true,
      },
      razorpayPaymentId: {
        type: String,
        required: true,
      },
      razorpaySignature: {
        type: String,
        required: true,
      },
      paymentStatus: {
        type: String,
        required: true,
      },
      paidAt: {
        type: Date,
        default: () => new Date().toUTCString(),
      },
    },
    addressDetails: {
      cordinates: {
        lat: {
          type: Number,
          required: true,
        },
        lng: {
          type: Number,
          required: true,
        },
      },
      placeName: {
        type: String,
        required: true,
        lowercase: true,
      },
      state: {
        type: String,
        required: true,
        lowercase: true,
      },
      country: {
        type: String,
        required: true,
        lowercase: true,
      },
      locality: {
        type: String,
        required: true,
        lowercase: true,
      },
      pinCode: {
        type: Number,
        required: true,
        lowercase: true,
      },
      district: {
        type: String,
        required: true,
        lowercase: true,
      },
      landmark: {
        type: String,
        required: true,
      },
    },
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: "products",
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    orderId: {
      type: String,
      default: () => generateOrderId(),
    },
    orderStatus: {
      type: String,
      default: "order placed",
    },
    restaurant: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "restaurants",
    },
  },
  { timestamps: true }
);

const Order = model("orders", orderSchema);

export default Order;
