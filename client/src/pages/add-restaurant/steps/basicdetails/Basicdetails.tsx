import { ChangeEvent, useState } from "react";
import { Input, SelectBox } from "../../../../components";
import { useRestaurantStep } from "../../../../hooks";
import Button from "../../../../styles/Button";
import Flex from "../../../../styles/Flex";
import {
  BasicDetailsContainer,
  FormControl,
  Grid,
  Row,
} from "./Basicdetails.styled";

const FOODTYPE = ["Vegiterian", "Non vegiterian", "Both"];

export default function Basicdetails() {
  const { nextStep } = useRestaurantStep();
  const [values, setValues] = useState({
    name: "",
    subDetails: "",
  });
  const [restaurantType, setRestaurantType] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  return (
    <BasicDetailsContainer>
      <Row>
        <Grid>
          <FormControl>
            <Input
              name="name"
              onChange={handleChange}
              value={values.name}
              title="Restaurant Name"
              type="text"
            />
          </FormControl>
          <FormControl>
            <SelectBox
              options={FOODTYPE}
              label="Restaurant type"
              current={restaurantType}
              changeCurrent={setRestaurantType}
            />
          </FormControl>
          <FormControl>
            <Input
              name="subDetails"
              onChange={handleChange}
              value={values.subDetails}
              title="Sub Details"
              type="text"
            />
          </FormControl>
        </Grid>
        <Flex>
          <Button onClick={nextStep}>Next</Button>
        </Flex>
      </Row>
    </BasicDetailsContainer>
  );
}
