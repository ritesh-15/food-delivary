import Joi from "joi";

export const loginSchemaValidation = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const registerSchemaValidation = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  name: Joi.string().required(),
  number: Joi.number().required(),
});
