import { Router } from "express";
import UserController from "../controllers/user-controller";
import { authMiddleware } from "../middlewares/authMiddleware";

const router: Router = Router();

router.route("/update").put(authMiddleware, UserController.update);

router
  .route("/remove-address/:id")
  .delete(authMiddleware, UserController.removeAddress);

export default router;
