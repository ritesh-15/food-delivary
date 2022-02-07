"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var product_controller_1 = __importDefault(require("../controllers/product-controller"));
var authMiddleware_1 = require("../middlewares/authMiddleware");
var restaurantMiddleware_1 = require("../middlewares/restaurantMiddleware");
var router = (0, express_1.Router)();
router
    .route("/product/new")
    .post([authMiddleware_1.authMiddleware, restaurantMiddleware_1.restaurantMiddleware], product_controller_1.default.createNewProduct);
router.route("/products/:id").get(product_controller_1.default.getAllProducts);
router
    .route("/product/:id")
    .get([authMiddleware_1.authMiddleware], product_controller_1.default.singleProduct)
    .put([authMiddleware_1.authMiddleware, restaurantMiddleware_1.restaurantMiddleware], product_controller_1.default.updateProduct)
    .delete([authMiddleware_1.authMiddleware, restaurantMiddleware_1.restaurantMiddleware], product_controller_1.default.deleteProduct);
exports.default = router;
