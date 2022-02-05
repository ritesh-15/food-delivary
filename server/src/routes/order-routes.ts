import { Router } from "express";
import OrderController from "../controllers/order-controller";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();

router
  .route("/order/make-order")
  .post(authMiddleware, OrderController.makeOrder);

router.route("/order/new-order").post(authMiddleware, OrderController.newOrder);

export default router;
