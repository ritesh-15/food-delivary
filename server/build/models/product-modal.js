"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var productSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    restaurant: {
        type: mongoose_1.Schema.Types.ObjectId,
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
}, { timestamps: true });
var Product = (0, mongoose_1.model)("products", productSchema);
exports.default = Product;
