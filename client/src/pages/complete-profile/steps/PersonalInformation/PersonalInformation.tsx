import {
  FormControl,
  PersonalInformationContainer,
  PersonalInformationForm,
  Row,
  Grid,
} from "./PersonalInformation.styled";
import { Input, SelectBox } from "../../../../components";
import { ChangeEvent, useState } from "react";
import Button from "../../../../styles/Button";
import { useCompleteProfileSteps } from "../../../../hooks";

export default function PersonalInformation() {
  const { nextStep } = useCompleteProfileSteps();

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <PersonalInformationContainer>
      <PersonalInformationForm>
        <Row>
          <h1>Personal details</h1>
          <Grid>
            <FormControl>
              <Input
                title="First name"
                value={values.firstName}
                name="firstName"
                type="text"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <Input
                title="Last name"
                value={values.lastName}
                name="lastName"
                type="text"
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
        </Row>
        <Row>
          <FormControl>
            <Input
              title="Mobile number"
              value={values.phone}
              name="phone"
              type="text"
              onChange={handleChange}
            />
          </FormControl>
        </Row>

        <Button onClick={nextStep}>Continue</Button>
      </PersonalInformationForm>
    </PersonalInformationContainer>
  );
}
