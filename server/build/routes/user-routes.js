"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_controller_1 = __importDefault(require("../controllers/user-controller"));
var adminMiddleware_1 = __importDefault(require("../middlewares/adminMiddleware"));
var authMiddleware_1 = require("../middlewares/authMiddleware");
var router = (0, express_1.Router)();
router.route("/update").put(authMiddleware_1.authMiddleware, user_controller_1.default.update);
router
    .route("/remove-address/:id")
    .delete(authMiddleware_1.authMiddleware, user_controller_1.default.removeAddress);
router
    .route("/all")
    .get([authMiddleware_1.authMiddleware, adminMiddleware_1.default], user_controller_1.default.getAll);
router
    .route("/:id")
    .get([authMiddleware_1.authMiddleware, adminMiddleware_1.default], user_controller_1.default.getSingleUser);
router
    .route("/admin-update/:id")
    .put([authMiddleware_1.authMiddleware, adminMiddleware_1.default], user_controller_1.default.adminUpdateUser)
    .delete([authMiddleware_1.authMiddleware, adminMiddleware_1.default], user_controller_1.default.deleteUser);
exports.default = router;
