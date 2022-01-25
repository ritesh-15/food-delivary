import { NextFunction, Request, Response } from "express";
import { APP_BASE_URL } from "../keys/secrets";
import ErrorHandler from "../services/Error-Handler";

class UploadFileController {
  static async uploadSingleFile(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    if (!req.file) return next(ErrorHandler.badRequest());
    const fileInfo = {
      filename: req.file.filename,
      type: req.file.mimetype,
      size: req.file.size,
      destination: req.file.destination,
      url: `${APP_BASE_URL}/uploads/${req.file.filename}`,
    };

    return res.json({ ok: true, fileInfo });
  }

  static async uploadMultipleFiles(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    if (!req.files) return next(ErrorHandler.badRequest());

    return res.json({ ok: true, files: req.files });
  }
}

export default UploadFileController;
