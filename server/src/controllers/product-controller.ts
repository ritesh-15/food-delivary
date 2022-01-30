import { NextFunction, Request, Response } from "express";
import { User } from "../interfaces/User-Interface";
import ErrorHandler from "../services/Error-Handler";
import Restaurant from "../models/restaurant-modal";
import { APP_BASE_URL } from "../keys/secrets";
import Product from "../models/product-modal";
import { unlink } from "fs/promises";
import path from "path";

class ProductController {
  async createNewProduct(req: Request, res: Response, next: NextFunction) {
    const { name, image, description, price, menu, type } = req.body;
    const user = <User>req.user;

    if (!name || !image || !description || !price || !menu || !type)
      return next(ErrorHandler.unProcessebleEntity());

    try {
      const restaurant = await Restaurant.findOne({ userId: user._id });

      if (!restaurant)
        return next(ErrorHandler.notFound("Restaurant not found!"));

      const body = {
        type,
        name,
        description,
        price,
        menu,
        image: {
          url: `${APP_BASE_URL}/uploads/${image}`,
          filename: image,
        },
        restaurant: restaurant._id,
      };

      const product = await Product.create(body);

      return res.json({ ok: true, product });
    } catch (error) {
      return next(ErrorHandler.serverError());
    }
  }

  // delete product
  async deleteProduct(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    if (!id) return ErrorHandler.unProcessebleEntity();

    try {
      const product = await Product.findOne({ _id: id });

      if (!product) return ErrorHandler.notFound("Product not found!");

      await unlink(
        path.join(__dirname, `../uploads/${product.image.filename}`)
      );

      await Product.deleteOne({ _id: id });

      return res.json({ ok: true, message: "Product deleted successfully!" });
    } catch (error) {
      return next(ErrorHandler.serverError());
    }
  }

  // get single product
  async singleProduct(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    if (!id) return next(ErrorHandler.unProcessebleEntity());

    try {
      const product = await Product.findOne({ _id: id }).populate("restaurant");

      if (!product) return next(ErrorHandler.notFound("Product not found!"));

      return res.json({ ok: true, product });
    } catch (error) {
      return next(ErrorHandler.serverError());
    }
  }

  // update product
  async updateProduct(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const { image, name, description, price, menu, type } = req.body;

    if (!id) return ErrorHandler.unProcessebleEntity();

    try {
      const product = await Product.findOne({ _id: id });

      if (!product) return ErrorHandler.notFound("Product not found!");

      let images;

      if (image) {
        await unlink(
          path.join(__dirname, `../uploads/${product.image.filename}`)
        );

        images = {
          url: `${APP_BASE_URL}/uploads/${image}`,
          filename: image,
        };
      }

      const updatedProduct = await Product.findOneAndUpdate(
        { _id: id },
        {
          $set: {
            image: images ? images : product.image,
            name: name || product.name,
            description: description || product.description,
            menu: menu || product.menu,
            price: price || product.price,
            type: type || product.type,
          },
        },
        { new: true }
      ).populate("restaurant");

      return res.json({ ok: true, product: updatedProduct });
    } catch (error) {
      return next(ErrorHandler.serverError());
    }
  }

  // Get all product
  async getAllProducts(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    if (!id) return next(ErrorHandler.badRequest());

    try {
      const products = await Product.find({ restaurant: id })
        .sort({ createdAt: -1 })
        .populate("restaurant");
      return res.json({ ok: true, products });
    } catch (error) {
      return next(ErrorHandler.serverError());
    }
  }
}

export default new ProductController();
