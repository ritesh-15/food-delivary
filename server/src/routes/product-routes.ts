import { Router } from "express";
import productController from "../controllers/product-controller";
import { authMiddleware } from "../middlewares/authMiddleware";
import { restaurantMiddleware } from "../middlewares/restaurantMiddleware";

const router: Router = Router();

router
  .route("/product/new")
  .post(
    [authMiddleware, restaurantMiddleware],
    productController.createNewProduct
  );

router
  .route("/product")
  .get([authMiddleware], productController.getAllProducts);

router
  .route("/product/:id")
  .get([authMiddleware], productController.singleProduct)
  .put([authMiddleware, restaurantMiddleware], productController.updateProduct)
  .delete(
    [authMiddleware, restaurantMiddleware],
    productController.deleteProduct
  );

export default router;
