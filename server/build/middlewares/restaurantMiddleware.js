"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurantMiddleware = void 0;
var Error_Handler_1 = __importDefault(require("../services/Error-Handler"));
var restaurantMiddleware = function (req, res, next) {
    var currentUser = req.user;
    if (currentUser.isRestaurantOwner)
        return next();
    return next(Error_Handler_1.default.unAuthorised());
};
exports.restaurantMiddleware = restaurantMiddleware;
