import { ChangeEvent, useState } from "react";
import { AddRestaurantModal, Input, SelectBox } from "../../components";
import Button from "../../styles/Button";
import Container from "../../styles/Container";
import {
  AddRestaurantContainer,
  FormContainer,
  FormControl,
  Heading,
  Row,
  Wrapper,
  ImageContainer,
  Agreement,
} from "./AddResturant.styled";

const FOOD_TYPE = ["Vegiterian", "Non vegeterian", "Both"];

export default function AddRestuarant() {
  const [values, setValues] = useState({
    name: "",
    subDetails: "",
    numberOfFoods: "",
    minimumPriceOfFood: "",
    city: "",
    pinCode: "",
    contactNumber: "",
    emailAddress: "",
    dailyCustomers: "",
  });

  const [isSubmited, setIsSubmited] = useState(false);
  const [foodType, setFoodType] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  return (
    <Wrapper>
      <Container>
        {isSubmited && <AddRestaurantModal />}
        <AddRestaurantContainer>
          <Heading>
            <h1>Hey, Ritesh welcome to foodies application portal !</h1>
            <p>
              Please complete the following steps to complete the application
              process.
            </p>
          </Heading>
          <FormContainer>
            <h1>Restaurant Details</h1>
            <Row>
              <FormControl>
                <Input
                  name="name"
                  title="Restaurant name"
                  value={values.name}
                  onChange={handleChange}
                  type="text"
                />
              </FormControl>
              <FormControl>
                <Input
                  name="subDetails"
                  title="Famous for"
                  value={values.subDetails}
                  onChange={handleChange}
                  type="text"
                />
              </FormControl>
              <FormControl>
                <Input
                  name="numberOfFoods"
                  title="Number of food products availabel"
                  value={values.numberOfFoods}
                  onChange={handleChange}
                  type="text"
                />
              </FormControl>
              <FormControl>
                <SelectBox
                  options={FOOD_TYPE}
                  current={foodType}
                  label="Select food type"
                  changeCurrent={setFoodType}
                />
              </FormControl>
              <FormControl>
                <Input
                  name="minimumPriceOfFood"
                  title="Minimum price of food"
                  value={values.minimumPriceOfFood}
                  onChange={handleChange}
                  type="text"
                />
              </FormControl>
              <FormControl>
                <Input
                  name="dailyCustomers"
                  title="Number of daily customers"
                  value={values.dailyCustomers}
                  onChange={handleChange}
                  type="text"
                />
              </FormControl>
            </Row>
            <h1>Location and contact details</h1>
            <Row>
              <FormControl>
                <Input
                  name="city"
                  title="City in which restaurant located"
                  value={values.city}
                  onChange={handleChange}
                  type="text"
                />
              </FormControl>
              <FormControl>
                <Input
                  name="pinCode"
                  title="Pin code of city"
                  value={values.pinCode}
                  onChange={handleChange}
                  type="text"
                />
              </FormControl>
              <FormControl>
                <Input
                  name="contactNumber"
                  title="Restaurant contact number (if any)"
                  value={values.contactNumber}
                  onChange={handleChange}
                  type="text"
                />
              </FormControl>
            </Row>
            <h1>Upload restaurant image</h1>
            <ImageContainer>
              <div>
                <img
                  src="https://media.istockphoto.com/photos/delicious-meal-picture-id1295387240?b=1&k=20&m=1295387240&s=170667a&w=0&h=KtWYFjSBgpNgVkE3P-WKZ2F6V-VxyUBBtJIP_k8IANM="
                  alt=""
                />
              </div>
              <label htmlFor="cover">Choose Image</label>
              <input type="file" id="cover" />
            </ImageContainer>
            <h1>Agreement</h1>
            <Agreement>
              <input type="checkbox" />
              <p>
                By clicking you are agreed our terms and condition of working
                with you.
              </p>
            </Agreement>
            <Button hover>Submit Application</Button>
          </FormContainer>
        </AddRestaurantContainer>
      </Container>
    </Wrapper>
  );
}
