import { model, Schema } from "mongoose";
import { ProductInterface } from "../interfaces/Product-interface";

const productSchema = new Schema<ProductInterface>(
  {
    name: {
      type: String,
      required: true,
    },

    restaurant: {
      type: Schema.Types.ObjectId,
      ref: "restaurants",
      required: true,
    },
    image: {
      url: {
        type: String,
        required: true,
      },
      filename: {
        type: String,
        required: true,
      },
    },
    description: {
      type: String,
      required: true,
    },
    menu: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Product = model("products", productSchema);
export default Product;
