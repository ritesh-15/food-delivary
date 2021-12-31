import { ChangeEvent, FormEvent, useState } from "react";
import { Input } from "../../../../components";
import { useCompleteProfileSteps } from "../../../../hooks";
import Button from "../../../../styles/Button";
import Flex from "../../../../styles/Flex";
import {
  FormControl,
  Grid,
  PasswordContainer,
  PasswordInformationForm,
  Row,
} from "./SetPassword.styled";

export default function SetPassword() {
  const { previousStep } = useCompleteProfileSteps();
  const [values, setValues] = useState({ password: "", confirmPassword: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  const save = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <PasswordContainer>
      <PasswordInformationForm>
        <Row>
          <h1>Set up a strong password</h1>
          <Grid>
            <FormControl>
              <Input
                title="New password"
                value={values.password}
                name="password"
                type="password"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <Input
                title="Confirm new password"
                value={values.confirmPassword}
                name="confirmPassword"
                type="password"
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
        </Row>

        <Flex>
          <Button onClick={previousStep}>Previous</Button>
          <Button>Save</Button>
        </Flex>
      </PasswordInformationForm>
    </PasswordContainer>
  );
}
