"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var restaurant_controller_1 = __importDefault(require("../controllers/restaurant-controller"));
var adminMiddleware_1 = __importDefault(require("../middlewares/adminMiddleware"));
var authMiddleware_1 = require("../middlewares/authMiddleware");
var restaurantMiddleware_1 = require("../middlewares/restaurantMiddleware");
var router = (0, express_1.Router)();
router.route("/restaurant/all").get(restaurant_controller_1.default.getAllRestaurants);
router
    .route("/restaurant/:id")
    .get(restaurant_controller_1.default.getRestaurant)
    .delete([authMiddleware_1.authMiddleware, adminMiddleware_1.default], restaurant_controller_1.default.deleteRestaurant)
    .put([authMiddleware_1.authMiddleware, restaurantMiddleware_1.restaurantMiddleware], restaurant_controller_1.default.updateRestaurant);
router
    .route("/restaurant")
    .get([authMiddleware_1.authMiddleware, restaurantMiddleware_1.restaurantMiddleware], restaurant_controller_1.default.getRestaurantByUserID);
exports.default = router;
