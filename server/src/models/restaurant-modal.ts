import { model, Schema } from "mongoose";
import { RestaurantInterface } from "../interfaces/Restaurant-interface";

const restaurantSchema = new Schema<RestaurantInterface>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
      unique: true,
    },
    status: {
      type: String,
      required: true,
    },
    restaurantID: {
      type: String,
      required: true,
      unique: true,
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
      },
    },
    ratings: [
      {
        userId: {
          type: Schema.Types.ObjectId,
          ref: "users",
          required: true,
        },
        ratings: {
          type: Number,
          required: true,
          maxlength: 5,
        },
        review: {
          type: String,
          required: true,
          maxlength: 100,
        },
        createdAt: {
          type: Date,
          default: () => new Date(Date.now()),
        },
      },
    ],
    images: [
      {
        url: {
          type: String,
          required: true,
        },
        fileType: {
          type: String,
          required: true,
        },
      },
    ],
  },

  { timestamps: true }
);

export default model("restaurants", restaurantSchema);
