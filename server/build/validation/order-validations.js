"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateNewOrderBody = void 0;
var joi_1 = __importDefault(require("joi"));
exports.validateNewOrderBody = joi_1.default.object({
    addressDetails: joi_1.default.object({
        cordinates: joi_1.default.object({
            lat: joi_1.default.number().required(),
            lng: joi_1.default.number().required(),
        }),
        placeName: joi_1.default.string().required(),
        state: joi_1.default.string().required(),
        country: joi_1.default.string().required(),
        locality: joi_1.default.string().required(),
        pinCode: joi_1.default.number().required(),
        district: joi_1.default.string().required(),
        landmark: joi_1.default.string().required(),
        _id: joi_1.default.string(),
    }).required(),
    paymentDetails: joi_1.default.object({
        amount: joi_1.default.number().required(),
        mode: joi_1.default.string().required(),
        razorpayOrderId: joi_1.default.string().required(),
        razorpayPaymentId: joi_1.default.string().required(),
        razorpaySignature: joi_1.default.string().required(),
        paymentStatus: joi_1.default.string().required(),
        paidAt: joi_1.default.date().required(),
    }).required(),
    products: joi_1.default.array()
        .items(joi_1.default.object({
        product: joi_1.default.object().required(),
        quantity: joi_1.default.number().required(),
    }))
        .required(),
    restaurant: joi_1.default.string().required(),
});
