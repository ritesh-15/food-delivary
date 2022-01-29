export const newProductValidation = (values: {
  name: string;
  description: string;
  price: string;
  menu: string;
}) => {
  let errors: any = {};

  if (!values.name) errors.name = "Product name is required!";

  if (!values.description)
    errors.description = "Product description is required!";

  if (!values.price) {
    errors.price = "Product price is required!";
  }

  if (!values.menu) errors.menu = "Product menu is required!";

  return errors;
};
