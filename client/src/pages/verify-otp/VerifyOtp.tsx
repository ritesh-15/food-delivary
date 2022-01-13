import {
  VerifyContainer,
  VerifyForm,
  VerifyFormControll,
  VerifyMain,
} from "./VerifyOtp.styled";
import { Input } from "../../components";
import { ChangeEvent, useState } from "react";
import Button from "../../styles/Button";

export default function VerifyOtp() {
  const [otp, setOtp] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setOtp(e.target.value);
  };

  return (
    <VerifyContainer>
      <VerifyMain>
        <VerifyForm>
          <h1>OTP sent to</h1>
          <p>riteshkhore@gmail.com</p>
          <VerifyFormControll>
            <Input
              value={otp}
              onChange={handleChange}
              name="otp"
              type="text"
              title="Enter OTP"
            />
            <Button>Resend OTP in 00:16</Button>
          </VerifyFormControll>
          <Button disabled hover>
            Continue
          </Button>
        </VerifyForm>
      </VerifyMain>
    </VerifyContainer>
  );
}
