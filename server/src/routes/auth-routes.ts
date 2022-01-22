import { Router } from "express";
import AuthController from "../controllers/auth-controller";
import { AuthMiddleware } from "../middlewares/authMiddleware";

const router: Router = Router();

// register route
router.route("/register").post(AuthController.register);

// login
router.route("/login").post(AuthController.login);

//send otp
router.route("/send-otp").post(AuthController.sendOTP);

// verify otp
router.route("/verify-otp").post(AuthController.verifyOtp);

// refresh
router.route("/refresh").get(AuthController.refresh);

// log out
router.route("/logout").delete(AuthMiddleware, AuthController.logout);

// forgot password
router.route("/forgot-password").post(AuthController.forgotPassword);

export default router;
