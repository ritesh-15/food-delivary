import { Schema, model } from "mongoose";
import { ApplicationInterface } from "../interfaces/Application-interface";

const applicationSchema = new Schema<ApplicationInterface>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
      unique: true,
    },
    status: {
      type: String,
      default: "pending",
    },
    restaurantID: {
      type: String,
      required: true,
      unique: true,
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
        default: Date.now,
      },
    },
    documents: {
      applicantProof: {
        url: {
          type: String,
          required: true,
        },
        fileType: {
          type: String,
          required: true,
        },
        uploadedAt: {
          type: String,
          default: Date.now,
        },
        filename: {
          type: String,
          required: true,
        },
      },
      foodAuthorityCertificate: {
        url: {
          type: String,
          required: true,
        },
        fileType: {
          type: String,
          required: true,
        },
        uploadedAt: {
          type: String,
          default: Date.now,
        },
        filename: {
          type: String,
          required: true,
        },
      },
    },
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
        default: () => new Date(Date.now()),
      },
    },
    images: {
      url: {
        type: String,
        required: true,
      },
      fileType: {
        type: String,
        required: true,
      },
      filename: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: true }
);

export default model("applications", applicationSchema);
