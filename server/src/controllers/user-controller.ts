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
}

export default UserController;
