import { model, Schema } from "mongoose";
import { User } from "../interfaces/User-Interface";

const UserSchema = new Schema<User>(
  {
    name: {
      type: String,
      required: true,
      maxlength: 200,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      maxlength: 200,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      maxlength: 500,
      select: false,
    },
    number: {
      type: Number,
      required: true,
      maxlength: 12,
    },
    addresses: [
      {
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
    ],
    isRestaurantOwner: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isSuspended: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default model("users", UserSchema);
