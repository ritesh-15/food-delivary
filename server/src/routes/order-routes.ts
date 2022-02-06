import { Router } from "express";
import OrderController from "../controllers/order-controller";
import { authMiddleware } from "../middlewares/authMiddleware";
import { restaurantMiddleware } from "../middlewares/restaurantMiddleware";

const router = Router();

router
  .route("/order/make-order")
  .post(authMiddleware, OrderController.makeOrder);

router.route("/order/new-order").post(authMiddleware, OrderController.newOrder);

router
  .route("/order/get-orders")
  .get(authMiddleware, OrderController.getUserOrders);

router
  .route("/order/all-orders")
  .get([authMiddleware, restaurantMiddleware], OrderController.allOrders);

router
  .route("/order/:id")
  .get(authMiddleware, OrderController.singleOrder)
  .delete(authMiddleware, OrderController.cancelOrder)
  .put(
    [authMiddleware, restaurantMiddleware],
    OrderController.changeOrderStatus
  );

export default router;
