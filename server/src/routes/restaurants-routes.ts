import { Router } from "express";
import RestaurantController from "../controllers/restaurant-controller";
import adminMiddleware from "../middlewares/adminMiddleware";
import { authMiddleware } from "../middlewares/authMiddleware";
import { restaurantMiddleware } from "../middlewares/restaurantMiddleware";

const router: Router = Router();

router.route("/restaurant/all").get(RestaurantController.getAllRestaurants);

router
  .route("/restaurant/:id")
  .get(RestaurantController.getRestaurant)
  .delete(
    [authMiddleware, adminMiddleware],
    RestaurantController.deleteRestaurant
  )
  .put(
    [authMiddleware, restaurantMiddleware],
    RestaurantController.updateRestaurant
  );

router
  .route("/restaurant")
  .get(
    [authMiddleware, restaurantMiddleware],
    RestaurantController.getRestaurantByUserID
  );

export default router;
