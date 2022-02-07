"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateApplicationValidation = exports.newAplicationValidation = void 0;
var joi_1 = __importDefault(require("joi"));
exports.newAplicationValidation = joi_1.default.object({
    isAgreed: joi_1.default.boolean().required(),
    restaurantInfo: joi_1.default.object().required().keys({
        name: joi_1.default.string().required(),
        famousFor: joi_1.default.string().required(),
        numberOfFoodProducts: joi_1.default.number().required(),
        foodType: joi_1.default.string().required(),
        minimumFoodPrice: joi_1.default.number().required(),
        numberOfDailyCustomers: joi_1.default.number().required(),
        email: joi_1.default.string().required().email(),
        number: joi_1.default.number().required(),
    }),
    addressInfo: joi_1.default.object()
        .required()
        .keys({
        cordinates: joi_1.default.object().keys({
            lat: joi_1.default.number().required(),
            lng: joi_1.default.number().required(),
        }),
        placeName: joi_1.default.string().required(),
        state: joi_1.default.string().required(),
        country: joi_1.default.string().required(),
        locality: joi_1.default.string().required(),
        pinCode: joi_1.default.number().required(),
        district: joi_1.default.string().required(),
    }),
    documents: joi_1.default.object()
        .required()
        .keys({
        applicantProof: joi_1.default.object().required().keys({
            filename: joi_1.default.string().required(),
            fileType: joi_1.default.string().required(),
        }),
        foodAuthorityCertificate: joi_1.default.object().required().keys({
            filename: joi_1.default.string().required(),
            fileType: joi_1.default.string().required(),
        }),
    }),
    images: joi_1.default.object().required().keys({
        filename: joi_1.default.string().required(),
        fileType: joi_1.default.string().required(),
    }),
});
exports.updateApplicationValidation = joi_1.default.object({
    restaurantInfo: joi_1.default.object().keys({
        name: joi_1.default.string(),
        famousFor: joi_1.default.string(),
        numberOfFoodProducts: joi_1.default.number(),
        foodType: joi_1.default.string(),
        minimumFoodPrice: joi_1.default.number(),
        numberOfDailyCustomers: joi_1.default.number(),
        email: joi_1.default.string().email(),
        number: joi_1.default.number(),
    }),
});
