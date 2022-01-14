import { Router } from "express";
import AuthController from "../controllers/auth-controller";

const router: Router = Router();

// register route
router.post("/register", AuthController.register);

// login
router.post("/login", AuthController.login);

export default router;
