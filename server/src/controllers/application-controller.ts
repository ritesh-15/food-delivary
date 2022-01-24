import { NextFunction, Request, Response } from "express";

class ApplicationController {
  static async newApplication(req: Request, res: Response, next: NextFunction) {
    console.log(req.body);
    res.json({ ok: true });
  }
}

export default ApplicationController;
