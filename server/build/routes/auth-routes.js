"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_controller_1 = __importDefault(require("../controllers/auth-controller"));
var authMiddleware_1 = require("../middlewares/authMiddleware");
var router = (0, express_1.Router)();
// register route
router.route("/register").post(auth_controller_1.default.register);
// login
router.route("/login").post(auth_controller_1.default.login);
//send otp
router.route("/send-otp").post(auth_controller_1.default.sendOTP);
// verify otp
router.route("/verify-otp").post(auth_controller_1.default.verifyOtp);
// refresh
router.route("/refresh").get(auth_controller_1.default.refresh);
// log out
router.route("/logout").delete(authMiddleware_1.authMiddleware, auth_controller_1.default.logout);
// forgot password
router.route("/forgot-password").post(auth_controller_1.default.forgotPassword);
exports.default = router;
