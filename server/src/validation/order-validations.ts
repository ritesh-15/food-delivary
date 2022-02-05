import Joi from "joi";

export const validateNewOrderBody = Joi.object({
  addressDetails: Joi.object({
    cordinates: Joi.object({
      lat: Joi.number().required(),
      lng: Joi.number().required(),
    }),
    placeName: Joi.string().required(),
    state: Joi.string().required(),
    country: Joi.string().required(),
    locality: Joi.string().required(),
    pinCode: Joi.number().required(),
    district: Joi.string().required(),
    landmark: Joi.string().required(),
    _id: Joi.string(),
  }).required(),
  paymentDetails: Joi.object({
    amount: Joi.number().required(),
    mode: Joi.string().required(),
    razorpayOrderId: Joi.string().required(),
    razorpayPaymentId: Joi.string().required(),
    razorpaySignature: Joi.string().required(),
    paymentStatus: Joi.string().required(),
    paidAt: Joi.date().required(),
  }).required(),
  products: Joi.array()
    .items(
      Joi.object({
        product: Joi.object().required(),
        quantity: Joi.number().required(),
      })
    )
    .required(),
  restaurant: Joi.string().required(),
});
