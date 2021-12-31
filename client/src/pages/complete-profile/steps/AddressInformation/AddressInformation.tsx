import { ChangeEvent, useEffect, useState } from "react";
import { Input, SelectBox } from "../../../../components";
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
import States from "../../../../json/States.json";
import Districts from "../../../../json/Districts.json";

export default function AddressInformation() {
  const { nextStep, previousStep } = useCompleteProfileSteps();
  const [values, setValues] = useState({ pincode: "", city: "" });
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [districts, setDistrics] = useState<string[]>([]);

  useEffect(() => {
    Districts.states.map((e) => {
      if (e.state.toLocaleLowerCase() === state.toLocaleLowerCase()) {
        setDistrics(e.districts);
      }
    });
    setDistrict("");
  }, [state, Districts]);

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
              <SelectBox
                options={States.states}
                current={state}
                changeCurrent={setState}
                label="Select state"
              />
            </FormControl>
            <FormControl>
              <SelectBox
                options={districts}
                current={district}
                changeCurrent={setDistrict}
                label="Select district"
              />
            </FormControl>
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
