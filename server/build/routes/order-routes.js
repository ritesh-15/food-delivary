"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var order_controller_1 = __importDefault(require("../controllers/order-controller"));
var authMiddleware_1 = require("../middlewares/authMiddleware");
var restaurantMiddleware_1 = require("../middlewares/restaurantMiddleware");
var router = (0, express_1.Router)();
router
    .route("/order/make-order")
    .post(authMiddleware_1.authMiddleware, order_controller_1.default.makeOrder);
router.route("/order/new-order").post(authMiddleware_1.authMiddleware, order_controller_1.default.newOrder);
router
    .route("/order/get-orders")
    .get(authMiddleware_1.authMiddleware, order_controller_1.default.getUserOrders);
router
    .route("/order/all-orders")
    .get([authMiddleware_1.authMiddleware, restaurantMiddleware_1.restaurantMiddleware], order_controller_1.default.allOrders);
router
    .route("/order/:id")
    .get(authMiddleware_1.authMiddleware, order_controller_1.default.singleOrder)
    .delete(authMiddleware_1.authMiddleware, order_controller_1.default.cancelOrder)
    .put([authMiddleware_1.authMiddleware, restaurantMiddleware_1.restaurantMiddleware], order_controller_1.default.changeOrderStatus);
exports.default = router;
