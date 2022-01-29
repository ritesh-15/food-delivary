import { Router } from "express";
import UserController from "../controllers/user-controller";
import adminMiddleware from "../middlewares/adminMiddleware";
import { authMiddleware } from "../middlewares/authMiddleware";

const router: Router = Router();

router.route("/update").put(authMiddleware, UserController.update);

router
  .route("/remove-address/:id")
  .delete(authMiddleware, UserController.removeAddress);

router
  .route("/all")
  .get([authMiddleware, adminMiddleware], UserController.getAll);

router
  .route("/:id")
  .get([authMiddleware, adminMiddleware], UserController.getSingleUser);

router
  .route("/admin-update/:id")
  .put([authMiddleware, adminMiddleware], UserController.adminUpdateUser)
  .delete([authMiddleware, adminMiddleware], UserController.deleteUser);

export default router;
