interface ApplicationState {
  name: string;
  famousFor: string;
  numberOfFoodProducts: string;
  minimumFoodPrice: string;
  numberOfDailyCustomers: string;
  email: string;
  number: string;
}

export const newApplicationValidation = (values: ApplicationState) => {
  let errors: any = {};

  if (!values.name) errors.name = "Name is required!";

  if (!values.famousFor) errors.famousFor = "Famous for required!";

  if (!values.numberOfFoodProducts)
    errors.numberOfFoodProducts = "Number of food products required!";

  if (!values.minimumFoodPrice)
    errors.minimumFoodPrice = "Minimum food price required!";

  if (!values.numberOfDailyCustomers)
    errors.numberOfDailyCustomers = "Number of daily customers required!";

  if (!values.email) {
    errors.email = "Email required!";
  } else if (
    !/([a-zA-Z0-9\.\-\_]+)@([a-zA-Z0-9\.\-\_]+)\.([a-zA-Z]){2,5}$/.test(
      values.email
    )
  ) {
    errors.email = "Invalide email!";
  }

  if (!values.number) {
    errors.number = "Number required!";
  } else if (!/^([0-9]){10}$/.test(values.number)) {
    errors.number = "Invalide number!!";
  }

  return errors;
};
