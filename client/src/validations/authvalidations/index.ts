export const loginValidation = (values: {
  email: string;
  password: string;
}) => {
  let errors: any = {};

  if (!values.email) {
    errors.email = "Email address is required!";
  } else if (
    !/([a-zA-Z0-9\.\-\_]+)@([a-zA-Z0-9\.\-\_]+)\.([a-zA-Z]){2,5}$/.test(
      values.email
    )
  ) {
    errors.email = "Invalide email address!";
  }

  if (!values.password) {
    errors.password = "Password is required!";
  } else if (values.password.length < 6) {
    errors.password = "Password should be greater than 6 characters!";
  }

  return errors;
};

export const registerValidation = (values: {
  email: string;
  password: string;
  name: string;
  number: string;
}) => {
  let errors: any = {};

  if (!values.email) {
    errors.email = "Email address is required!";
  } else if (
    !/([a-zA-Z0-9\.\-\_]+)@([a-zA-Z0-9\.\-\_]+)\.([a-zA-Z]){2,5}$/.test(
      values.email
    )
  ) {
    errors.email = "Invalide email address!";
  }

  if (!values.password) {
    errors.password = "Password is required!";
  } else if (values.password.length < 6) {
    errors.password = "Password should be greater than 6 characters!";
  }

  if (!values.number) {
    errors.number = "Number is required!";
  } else if (!/^[0-9]{10}$/.test(values.number)) {
    errors.number = "Invalide phone number!";
  }

  if (!values.name) {
    errors.name = "Name is required!";
  } else if (!/^[a-zA-Z\s]{2,255}$/.test(values.name)) {
    errors.name = "Invalide name!";
  }

  return errors;
};

export const otpValidation = (values: { code: string }) => {
  let errors: any = {};

  if (!values.code) {
    errors.code = "Otp required!";
  } else if (!/^([0-9a-zA-Z]){6}$/.test(values.code)) {
    errors.code = "Invalide otp!";
  }

  return errors;
};
