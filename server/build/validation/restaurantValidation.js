"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRestaurantSchema = void 0;
var joi_1 = __importDefault(require("joi"));
exports.updateRestaurantSchema = joi_1.default.object({
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
    images: joi_1.default.object().keys({
        url: joi_1.default.string(),
        filename: joi_1.default.string(),
        fileType: joi_1.default.string(),
    }),
});
