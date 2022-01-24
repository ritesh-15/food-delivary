import { Router } from "express";
import ApplicationController from "../controllers/application-controller";
import { authMiddleware } from "../middlewares/authMiddleware";
import { upload } from "../middlewares/upload-middleware";

const router = Router();

router
  .route("/application/new")
  .post(
    [authMiddleware, upload.array("documents", 3)],
    ApplicationController.newApplication
  );

export default router;
