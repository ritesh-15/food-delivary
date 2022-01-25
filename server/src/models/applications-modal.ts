import { Schema, model } from "mongoose";
import { ApplicationInterface } from "../interfaces/Application-interface";

const applicationSchema = new Schema<ApplicationInterface>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    restaurantID: {
      type: String,
      required: true,
    },
    isAgreed: {
      type: Boolean,
      required: true,
    },
    restaurantInfo: {
      name: {
        type: String,
        required: true,
      },
      famousFor: {
        type: String,
        required: true,
      },
      numberOfFoodProducts: {
        type: Number,
        required: true,
      },
      minimumFoodPrice: {
        type: Number,
        required: true,
      },
      numberOfDailyCustomers: {
        type: Number,
        required: true,
      },
      number: {
        type: Number,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      foodType: {
        type: String,
        required: true,
      },
    },
    addressInfo: {
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
      },
      state: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      locality: {
        type: String,
        required: true,
      },
      pinCode: {
        type: Number,
        required: true,
      },
      district: {
        type: String,
        required: true,
      },
    },
    documents: [
      {
        nameOfDocument: {
          type: String,
          required: true,
        },
        uploadStatus: {
          type: Boolean,
          required: true,
        },
        filePath: {
          type: String,
          required: true,
        },
        uploadedAt: {
          type: Date,
          default: new Date(Date.now()),
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    rejectionDetails: {
      message: {
        type: String,
        default: "",
      },
      reason: {
        type: String,
        default: "",
      },
      generatedAt: {
        type: Date,
        default: new Date(Date.now()),
      },
    },
  },
  { timestamps: true }
);

export default model("applications", applicationSchema);
