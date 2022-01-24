import {
  ForgotPassword,
  LoginContainer,
  LoginForm,
  LoginFormControll,
  LoginMain,
} from "./Login.style";
import { Input } from "../../components";
import Button from "../../styles/Button";
import { Link } from "react-router-dom";
import { useFetchLoading, useForm, useMessage, useUser } from "../../hooks";
import { loginValidation } from "../../validations/authvalidations";
import { loginApi } from "../../api/authenticationApi";

interface LoginState {
  email: string;
  password: string;
}

const initialState: LoginState = { email: "", password: "" };

export default function Login() {
  const { changeUserState } = useUser();
  const { setMessage } = useMessage();
  const { setIsLoading } = useFetchLoading();

  const login = async (values: LoginState) => {
    setIsLoading(true);
    try {
      const res = await loginApi(values);
      if (res.data.ok) {
        changeUserState(res.data.user);
      }
      setIsLoading(false);
    } catch (err: any) {
      setIsLoading(false);
      setMessage(err.response.data.error.message, true);
    }
  };

  const { values, handleChange, handleSubmit, errors } = useForm(
    initialState,
    loginValidation,
    login
  );

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
              error={errors.email}
            />
          </LoginFormControll>
          <LoginFormControll>
            <Input
              value={values.password}
              onChange={handleChange}
              name="password"
              type="password"
              title="Password"
              error={errors.password}
            />
          </LoginFormControll>

          <Button onClick={handleSubmit} type="submit" hover>
            Log In
          </Button>
        </LoginForm>
        <ForgotPassword>
          <a href="/">Forgot Password?</a>
        </ForgotPassword>
      </LoginMain>
    </LoginContainer>
  );
}
