import { Router } from "express";
import OrderController from "../controllers/order-controller";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();

router.route("/new-order").post(authMiddleware, OrderController.newOrder);

export default router;
