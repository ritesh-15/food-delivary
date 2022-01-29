import { NextFunction, Request, Response } from "express";
import { User as UserInterface } from "../interfaces/User-Interface";
import ErrorHandler from "../services/Error-Handler";
import User from "../models/user-model";
import bcrypt from "bcrypt";

interface UserUpdateInterface {
  number: number;
  name: string;
  isAdmin: boolean;
  isRestaurantOwner: boolean;
  password: string;
  address: {
    cordinates: {
      lat: number;
      lng: number;
    };
    placeName: string;
    state: string;
    country: string;
    locality: string;
    pinCode: number;
    district: string;
  };
}

class UserController {
  static async update(req: Request, res: Response, next: NextFunction) {
    const {
      number,
      name,
      isAdmin,
      isRestaurantOwner,
      address,
      password,
    }: UserUpdateInterface = req.body;

    const currentUser: UserInterface = <UserInterface>req.user;

    try {
      const user = await User.findOne({ _id: currentUser._id }).select(
        "+password"
      );

      if (!user) return next(ErrorHandler.notFound("User not found!"));

      let hashedPassword;

      if (password) {
        hashedPassword = await bcrypt.hash(password, 10);
      }

      const updatedUser = await User.findOneAndUpdate(
        { _id: currentUser._id },
        {
          $set: {
            number,
            name,
            isAdmin,
            isRestaurantOwner,
            password: hashedPassword ? hashedPassword : user.password,
          },
          $addToSet: {
            addresses: address,
          },
        },
        {
          new: true,
        }
      );

      return res.json({ ok: true, user: updatedUser });
    } catch (error) {
      return next(ErrorHandler.serverError());
    }
  }

  static async removeAddress(req: Request, res: Response, next: NextFunction) {
    const currentUser: UserInterface = <UserInterface>req.user;

    const { id } = req.params;

    if (!id) return next(ErrorHandler.unProcessebleEntity());

    try {
      const user = await User.findOne({ _id: currentUser._id });

      if (!user) return next(ErrorHandler.notFound("User not found!"));

      const updatedUser = await User.findOneAndUpdate(
        { _id: currentUser._id },
        {
          $set: {
            user,
          },
          $pull: {
            addresses: {
              _id: id,
            },
          },
        },
        { new: true }
      );

      return res.json({ ok: true, user: updatedUser });
    } catch (error) {
      return next(ErrorHandler.serverError());
    }
  }

  static async getAll(req: Request, res: Response, next: NextFunction) {
    const { latest } = req.query;

    try {
      const users = latest
        ? await User.find().sort({ createdAt: -1 })
        : await User.find().sort({ createdAt: -1 }).limit(5);

      return res.json({ ok: true, users });
    } catch (error) {
      return next(ErrorHandler.serverError());
    }
  }

  static async getSingleUser(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    if (!id) return next(ErrorHandler.unProcessebleEntity());

    try {
      const user = await User.findOne({ _id: id });

      if (!user) return next(ErrorHandler.notFound("User not found!"));

      return res.json({ ok: true, user });
    } catch (error) {
      return next(ErrorHandler.serverError());
    }
  }

  static async adminUpdateUser(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { id } = req.params;
    const { isAdmin } = req.body;

    if (!id) return next(ErrorHandler.unProcessebleEntity());

    try {
      const user = await User.findOne({ _id: id });

      if (!user) return next(ErrorHandler.notFound("User not found!"));

      user.isAdmin = isAdmin;

      await user.save();

      return res.json({ ok: true, user });
    } catch (error) {
      return next(ErrorHandler.serverError());
    }
  }

  static async deleteUser(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    if (!id) return next(ErrorHandler.unProcessebleEntity());

    try {
      const user = await User.findOne({ _id: id });

      if (!user) return next(ErrorHandler.notFound("User not found!"));

      await User.deleteOne({ _id: user._id });

      return res.json({ ok: true, user });
    } catch (error) {
      return next(ErrorHandler.serverError());
    }
  }
}

export default UserController;
