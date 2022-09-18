import { NextFunction, Request, Response } from "express";
import Restaurant from "../models/restaurant-modal";
import ErrorHandler from "../services/Error-Handler";
import { User as UserInterface } from "../interfaces/User-Interface";
import { unlink } from "fs/promises";
import path from "path";
import { updateRestaurantSchema } from "../validation/restaurantValidation";
import Application from "../models/applications-modal";
import User from "../models/user-model";
import { existsSync } from "fs";

class RestaurantController {
  static async getAllRestaurants(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { query } = req.query;

    const findOptions = {
      $or: [
        {
          "addressInfo.placeName": query,
        },
        {
          "addressInfo.state": query,
        },
        {
          "addressInfo.country": query,
        },
        {
          "addressInfo.district": query,
        },
        {
          "addressInfo.locality": query,
        },
      ],
    };

    try {
      const restaurants = query
        ? await Restaurant.find(findOptions)
            .populate("userId")
            .sort({ createdAt: -1 })
        : await Restaurant.find().populate("userId").sort({ createdAt: -1 });

      return res.json({ ok: true, restaurants });
    } catch (err) {
      return next(ErrorHandler.serverError());
    }
  }

  static async getRestaurant(req: Request, res: Response, next: NextFunction) {
    const currentUser: UserInterface = <UserInterface>req.user;
    const { id } = req.params;

    try {
      const restaurant = await Restaurant.findOne({
        _id: id,
      }).populate("userId");

      if (!restaurant) {
        return next(ErrorHandler.notFound("Restaurant not found!"));
      }

      return res.json({ ok: true, restaurant });
    } catch (error) {
      return next(ErrorHandler.serverError());
    }
  }

  static async deleteRestaurant(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { id } = req.params;

    if (!id) return next(ErrorHandler.badRequest());

    try {
      const restaurant = await Restaurant.findOne({
        _id: id,
      }).populate("userId");

      if (!restaurant) {
        return next(ErrorHandler.notFound("Restaurant not found!"));
      }

      await Application.deleteOne({ userId: restaurant.userId });

      await User.updateOne(
        { _id: restaurant.userId },
        { $set: { isRestaurantOwner: false } }
      );

      await restaurant.remove();

      return res.json({ ok: true, deleted: true });
    } catch (error) {
      return next(ErrorHandler.serverError());
    }
  }

  static async updateRestaurant(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const body = req.body;
    const { id } = req.params;

    if (!id || !body) return next(ErrorHandler.badRequest());

    try {
      await updateRestaurantSchema.validateAsync(body);
    } catch (error) {
      return next(ErrorHandler.unProcessebleEntity());
    }

    try {
      const isResstaurantFound = await Restaurant.findOne({ _id: id }).populate(
        "userId"
      );

      if (!isResstaurantFound)
        return next(ErrorHandler.notFound("Restaurant not found!"));

      if (body.images) {
        await Application.findOneAndUpdate(
          { userId: isResstaurantFound.userId },
          {
            $set: {
              images: body.images,
            },
          },
          { new: true }
        );
      }

      const restaurant = await Restaurant.findOneAndUpdate(
        { _id: id },
        { $set: body },
        { new: true }
      ).populate("userId");

      return res.json({ ok: true, restaurant });
    } catch (error) {
      return next(ErrorHandler.serverError());
    }
  }

  static async getRestaurantByUserID(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const currentUser: UserInterface = <UserInterface>req.user;
    try {
      const restaurant = await Restaurant.findOne({
        userId: currentUser._id,
      }).populate("userId");

      if (!restaurant)
        return next(ErrorHandler.notFound("Restaurant not found"));

      return res.json({ ok: true, restaurant });
    } catch (error) {
      return next(ErrorHandler.serverError());
    }
  }
}

export default RestaurantController;
