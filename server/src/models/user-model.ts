import { model, Schema } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 200,
    },
    email: {
      type: String,
      required: true,
      maxlength: 200,
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
    address: [
      {
        city: {
          type: String,
          required: true,
          maxlength: 200,
        },
        pinCode: {
          type: String,
          required: true,
          maxlength: 10,
        },
        landmark: {
          type: String,
          required: true,
          maxlength: 200,
        },
        street: {
          type: String,
          required: true,
          maxlength: 200,
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
