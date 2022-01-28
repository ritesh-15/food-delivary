import Joi from "joi";

export const newAplicationValidation = Joi.object({
  isAgreed: Joi.boolean().required(),
  restaurantInfo: Joi.object().required().keys({
    name: Joi.string().required(),
    famousFor: Joi.string().required(),
    numberOfFoodProducts: Joi.number().required(),
    foodType: Joi.string().required(),
    minimumFoodPrice: Joi.number().required(),
    numberOfDailyCustomers: Joi.number().required(),
    email: Joi.string().required().email(),
    number: Joi.number().required(),
  }),
  addressInfo: Joi.object()
    .required()
    .keys({
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
  documents: Joi.object()
    .required()
    .keys({
      applicantProof: Joi.object().required().keys({
        filename: Joi.string().required(),
        fileType: Joi.string().required(),
      }),
      foodAuthorityCertificate: Joi.object().required().keys({
        filename: Joi.string().required(),
        fileType: Joi.string().required(),
      }),
    }),
  images: Joi.object().required().keys({
    filename: Joi.string().required(),
    fileType: Joi.string().required(),
  }),
});

export const updateApplicationValidation = Joi.object({
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
});
