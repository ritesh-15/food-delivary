import { useState } from "react";
import { useRestaurantStep } from "../../hooks";
import Container from "../../styles/Container";
import {
  AddRestaurantContainer,
  FormContainer,
  Heading,
  Status,
  StatusDiv,
  Wrapper,
} from "./AddResturant.styled";
import { Agreement, Basicdetails, RestaurantImage } from "./steps";

const STEPS: any = {
  1: Basicdetails,
  2: RestaurantImage,
  3: Agreement,
};

export default function AddRestuarant() {
  const { step } = useRestaurantStep();

  const Component = STEPS[step];

  return (
    <Wrapper>
      <Container>
        <AddRestaurantContainer>
          <Heading>
            <h1>Hey, Ritesh welcome to foodies application portal !</h1>
            <p>
              Please complete the following steps to complete the application
              process.
            </p>
          </Heading>
          <FormContainer>
            <StatusDiv>
              <Status active={step >= 1 && true}>
                <p>Basic details</p>
                <div></div>
              </Status>
              <Status active={step >= 2 && true}>
                <p>Restaurant Image</p>
                <div></div>
              </Status>
              <Status active={step >= 3 && true}>
                <p>Terms and conditions</p>
                <div></div>
              </Status>
            </StatusDiv>
            <Component />
          </FormContainer>
        </AddRestaurantContainer>
      </Container>
    </Wrapper>
  );
}
