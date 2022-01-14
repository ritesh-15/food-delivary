import { NextFunction, Request, Response } from "express";

class AuthController {
  // register controller
  static async register(req: Request, res: Response, next: NextFunction) {
    // get the user data
    const { name, email, number, password } = req.body;
    // validate the user data
    if (!name || !email || !number || !password) return;
    // verify is user already exists
    // hash the password
    // create new user
    // send the credentials
  }

  // login controller
  static async login(req: Request, res: Response, next: NextFunction) {}
}

export default AuthController;
