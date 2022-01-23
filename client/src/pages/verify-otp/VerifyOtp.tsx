import {
  ResendButton,
  VerifyContainer,
  VerifyForm,
  VerifyFormControll,
  VerifyMain,
} from "./VerifyOtp.styled";
import { Input } from "../../components";
import Button from "../../styles/Button";
import {
  useErrorMessage,
  useFetchLoading,
  useForm,
  useSuccessModal,
  useUser,
} from "../../hooks";
import { otpValidation } from "../../validations/authvalidations";
import { sendOtpApi, verifyOtpApi } from "../../api/authenticationApi";
import useTimer from "../../hooks/useTimer/useTimer";

interface OtpState {
  code: string;
}

const initialState: OtpState = {
  code: "",
};

export default function VerifyOtp() {
  const { setIsLoading } = useFetchLoading();
  const { changeErrorMessage } = useErrorMessage();
  const { otpState, changeUserState, changeOtpState } = useUser();
  const { setSuccessModal } = useSuccessModal();

  const { time, timeRemaning, setTime } = useTimer(2);

  // resend verification code
  const resendVerificationCode = async () => {
    setIsLoading(true);
    try {
      const { data } = await sendOtpApi({
        email: otpState.email,
      });
      if (data.ok) {
        changeOtpState(data.otp);
        setTime(2 * 60);
        setSuccessModal("Verification code sent successfully!");
      }
      setIsLoading(false);
    } catch (err: any) {
      setIsLoading(false);
      changeErrorMessage(err.response.data.error.message);
    }
  };

  const verifyCode = async (values: OtpState) => {
    setIsLoading(true);
    try {
      const { data } = await verifyOtpApi({
        email: otpState.email,
        hash: otpState.hash,
        code: values.code,
      });
      if (data.ok) {
        changeUserState(data.user);
      }
      setIsLoading(false);
    } catch (err: any) {
      setIsLoading(false);
      changeErrorMessage(err.response.data.error.message);
    }
  };

  const { values, handleChange, handleSubmit, errors } = useForm(
    initialState,
    otpValidation,
    verifyCode
  );

  return (
    <VerifyContainer>
      <VerifyMain>
        <VerifyForm>
          <h1>Verification code sent to</h1>
          <p>{otpState.email}</p>
          <VerifyFormControll>
            <Input
              value={values.code}
              onChange={handleChange}
              name="code"
              type="text"
              title="Enter verification code"
              error={errors.code}
            />
          </VerifyFormControll>

          <Button onClick={handleSubmit} hover>
            Verify Code
          </Button>
        </VerifyForm>
        <ResendButton>
          <Button
            onClick={resendVerificationCode}
            disabled={time < 0 ? false : true}
            style={
              time < 0
                ? { color: "hsl(27, 97%, 54%)" }
                : { color: "hsl(0,0%,50%)" }
            }
          >
            Resend Code in {timeRemaning}
          </Button>
        </ResendButton>
      </VerifyMain>
    </VerifyContainer>
  );
}
