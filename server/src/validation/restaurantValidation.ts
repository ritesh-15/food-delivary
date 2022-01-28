import Joi from "joi";

export const updateRestaurantSchema = Joi.object({
  restaurantInfo: Joi.object().keys({
    name: Joi.string(),
    famousFor: Joi.string(),
    numberOfFoodProducts: Joi.number(),
    foodType: Joi.string(),
    minimumFoodPrice: Joi.number(),
    numberOfDailyCustomers: Joi.number(),
    email: Joi.string().email(),
    number: Joi.number(),
  }),
  images: Joi.object().keys({
    url: Joi.string(),
    filename: Joi.string(),
    fileType: Joi.string(),
  }),
});
