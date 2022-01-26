import { Router } from "express";
import ApplicationController from "../controllers/application-controller";
import adminMiddleware from "../middlewares/adminMiddleware";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();

router
  .route("/application/new")
  .post(authMiddleware, ApplicationController.newApplication);

router
  .route("/application")
  .get(authMiddleware, ApplicationController.getSingleApplication)
  .put(authMiddleware, ApplicationController.updateApplication)
  .delete(authMiddleware, ApplicationController.deleteApplication);

router
  .route("/applications")
  .get(
    [authMiddleware, adminMiddleware],
    ApplicationController.allApplications
  );

export default router;
