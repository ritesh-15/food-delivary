import {
  RegisterContainer,
  RegisterForm,
  RegisterFormControll,
  RegisterMain,
} from "./Register.style";
import { Input } from "../../components";
import Button from "../../styles/Button";
import { Link } from "react-router-dom";
import {
  useFetchLoading,
  useForm,
  useMessage,
  useSuccessModal,
  useUser,
} from "../../hooks";
import { registerValidation } from "../../validations/authvalidations";
import { registerApi, sendOtpApi } from "../../api/authenticationApi";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface RegisterState {
  name: string;
  email: string;
  password: string;
  number: string;
}

const initialState = {
  name: "",
  email: "",
  password: "",
  number: "",
};

export default function Register() {
  const { setIsLoading } = useFetchLoading();
  const { setMessage } = useMessage();
  const { changeOtpState } = useUser();
  const navigate = useNavigate();
  const { setSuccessModal } = useSuccessModal();

  const [isMounted, setIsMounted] = useState<boolean>(true);

  useEffect(() => {
    return () => {
      setIsMounted(false);
    };
  }, []);

  // request for account verification
  const accountVerification = async (email: string) => {
    setIsLoading(true);
    try {
      const { data } = await sendOtpApi({ email });
      if (data.ok) {
        changeOtpState(data.otp);
        setSuccessModal("Verification code sent successfully!");
        navigate("/verify-otp");
      }
      setIsLoading(false);
    } catch (err: any) {
      setIsLoading(false);
      setMessage(err.response.data.error.message, true);
    }
  };

  const register = async (values: RegisterState) => {
    setIsLoading(true);
    try {
      const { data } = await registerApi(values);
      if (data.ok) {
        await accountVerification(data.user.email);
      }
      setIsLoading(false);
    } catch (err: any) {
      setIsLoading(false);
      setMessage(err.response.data.error.message, true);
    }
  };

  const { handleChange, handleSubmit, values, errors } = useForm(
    initialState,
    registerValidation,
    register
  );

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
              name="name"
              type="text"
              title="Name"
              error={errors.name}
            />
          </RegisterFormControll>
          <RegisterFormControll>
            <Input
              value={values.email}
              onChange={handleChange}
              name="email"
              type="email"
              title="Email address"
              error={errors.email}
            />
          </RegisterFormControll>
          <RegisterFormControll>
            <Input
              value={values.number}
              onChange={handleChange}
              name="number"
              type="text"
              title="Phone number"
              error={errors.number}
            />
          </RegisterFormControll>
          <RegisterFormControll>
            <Input
              value={values.password}
              onChange={handleChange}
              name="password"
              type="password"
              title="password"
              error={errors.password}
            />
          </RegisterFormControll>
          <Button onClick={handleSubmit} hover>
            Verify
          </Button>
        </RegisterForm>
      </RegisterMain>
    </RegisterContainer>
  );
}
