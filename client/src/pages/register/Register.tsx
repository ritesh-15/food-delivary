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
  const [values, setValues] = useState({ email: "", password: "" });

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
              value={values.email}
              onChange={handleChange}
              name="email"
              type="email"
              title="Email address"
            />
          </RegisterFormControll>
          <Button>Send Otp</Button>
        </RegisterForm>
      </RegisterMain>
    </RegisterContainer>
  );
}
