import { Router } from "express";
import UploadFileController from "../controllers/uploadfile-controller";
import { authMiddleware } from "../middlewares/authMiddleware";
import { upload } from "../middlewares/upload-middleware";

const router = Router();

router
  .route("/upload/single")
  .post(
    [authMiddleware, upload.single("file")],
    UploadFileController.uploadSingleFile
  );

router
  .route("/upload/multiple")
  .post(
    [authMiddleware, upload.array("file", 5)],
    UploadFileController.uploadMultipleFiles
  );

export default router;
