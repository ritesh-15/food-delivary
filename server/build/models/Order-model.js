"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var generateOrderId_1 = require("../util/generateOrderId");
var orderSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
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
            default: function () { return new Date().toUTCString(); },
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
                type: mongoose_1.Schema.Types.ObjectId,
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
        default: function () { return (0, generateOrderId_1.generateOrderId)(); },
    },
    orderStatus: {
        type: String,
        default: "placed",
    },
    restaurant: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: "restaurants",
    },
}, { timestamps: true });
var Order = (0, mongoose_1.model)("orders", orderSchema);
exports.default = Order;
