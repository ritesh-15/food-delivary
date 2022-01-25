import Joi from "joi";

export const newAplicationValidation = Joi.object({
  isAgreed: Joi.boolean().required(),
  restaurantInfo: Joi.object().keys({
    name: Joi.string().required(),
    famousFor: Joi.string().required(),
    numberOfFoodProducts: Joi.number().required(),
    foodType: Joi.string().required(),
    minimumFoodPrice: Joi.number().required(),
    numberOfDailyCustomers: Joi.number().required(),
    email: Joi.string().required().email(),
    number: Joi.number().required(),
  }),
  addressInfo: Joi.object().keys({
    cordinates: Joi.object().keys({
      lat: Joi.number().required(),
      lng: Joi.number().required(),
    }),
    placeName: Joi.string().required(),
    state: Joi.string().required(),
    country: Joi.string().required(),
    locality: Joi.string().required(),
    pinCode: Joi.number().required(),
    district: Joi.string().required(),
  }),
  documents: Joi.array().items(
    Joi.object().keys({
      filename: Joi.string().required(),
      destination: Joi.string().required(),
      nameOfDocuement: Joi.string().required(),
      filepath: Joi.string().required(),
    })
  ),
});
