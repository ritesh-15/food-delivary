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
    gender: "",
    phone: "",
    middleName: "",
  });

  const options: string[] = ["Male", "Female", "Other", "Prefer not to tell"];

  const [gender, setGender] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <PersonalInformationContainer>
      <PersonalInformationForm>
        <Row>
          <h1>General information</h1>
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
                title="Middle name"
                value={values.middleName}
                name="middleName"
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
            <FormControl>
              <SelectBox
                options={options}
                changeCurrent={setGender}
                current={gender}
                label="Select gender"
              />
            </FormControl>
          </Grid>
        </Row>
        <Row>
          <h1>Contact information</h1>
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
