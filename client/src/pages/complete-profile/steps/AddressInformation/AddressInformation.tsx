import { ChangeEvent, useState } from "react";
import { Input } from "../../../../components";
import { useCompleteProfileSteps } from "../../../../hooks";
import Button from "../../../../styles/Button";
import Flex from "../../../../styles/Flex";
import {
  FormControl,
  AddressInformationContainer,
  AddressInformationForm,
  Row,
  Grid,
} from "./AddressInformation.styled";

export default function AddressInformation() {
  const { nextStep, previousStep } = useCompleteProfileSteps();
  const [values, setValues] = useState({ pincode: "", city: "", landmark: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <AddressInformationContainer>
      <AddressInformationForm>
        <Row>
          <h1>Address details</h1>
          <Grid>
            <FormControl>
              <Input
                title="Enter city"
                value={values.city}
                name="city"
                type="text"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <Input
                title="Pin code"
                value={values.pincode}
                name="pincode"
                type="text"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <Input
                title="Landmark"
                value={values.landmark}
                name="landmark"
                type="text"
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
        </Row>
        <Flex>
          <Button onClick={previousStep}>Previous</Button>
          <Button onClick={nextStep}>Continue</Button>
        </Flex>
      </AddressInformationForm>
    </AddressInformationContainer>
  );
}
