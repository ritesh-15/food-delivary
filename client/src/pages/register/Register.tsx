import { ChangeEvent, useState } from "react";
import {
  RegisterContainer,
  RegisterForm,
  RegisterFormControll,
  RegisterMain,
} from "./Register.style";
import { Input } from "../../components";
import Button from "../../styles/Button";
import { Link } from "react-router-dom";

export default function Register() {
  const [values, setValues] = useState({
    email: "",
    name: "",
    password: "",
    number: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <RegisterContainer>
      <RegisterMain>
        <RegisterForm>
          <h1>Register</h1>
          <p>
            or <Link to="/login">login to account</Link>
          </p>
          <RegisterFormControll>
            <Input
              value={values.name}
              onChange={handleChange}
              name="email"
              type="text"
              title="Name"
            />
          </RegisterFormControll>
          <RegisterFormControll>
            <Input
              value={values.email}
              onChange={handleChange}
              name="email"
              type="email"
              title="Email address"
            />
          </RegisterFormControll>
          <RegisterFormControll>
            <Input
              value={values.number}
              onChange={handleChange}
              name="number"
              type="text"
              title="Phone number"
            />
          </RegisterFormControll>
          <RegisterFormControll>
            <Input
              value={values.password}
              onChange={handleChange}
              name="password"
              type="password"
              title="password"
            />
          </RegisterFormControll>
          <Button disabled hover>
            Send Otp
          </Button>
        </RegisterForm>
      </RegisterMain>
    </RegisterContainer>
  );
}
