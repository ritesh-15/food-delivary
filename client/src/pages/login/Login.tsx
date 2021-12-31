import {
  ForgotPassword,
  LoginContainer,
  LoginForm,
  LoginFormControll,
  LoginMain,
} from "./Login.style";
import { Input } from "../../components";
import { ChangeEvent, useState } from "react";
import Button from "../../styles/Button";
import Flex from "../../styles/Flex";
import { Link } from "react-router-dom";

export default function Login() {
  const [values, setValues] = useState({ email: "", password: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <LoginContainer>
      <LoginMain>
        <LoginForm>
          <h1>Log In</h1>
          <p>
            or <Link to="/register">create new account</Link>
          </p>
          <LoginFormControll>
            <Input
              value={values.email}
              onChange={handleChange}
              name="email"
              type="email"
              title="Email address"
            />
          </LoginFormControll>
          <LoginFormControll>
            <Input
              value={values.password}
              onChange={handleChange}
              name="password"
              type="password"
              title="Password"
            />
          </LoginFormControll>

          <Button>Log In</Button>
          <small>or</small>
          <Button>Request OTP</Button>
        </LoginForm>
        <ForgotPassword>
          <a href="">Forgot Password?</a>
        </ForgotPassword>
      </LoginMain>
    </LoginContainer>
  );
}
