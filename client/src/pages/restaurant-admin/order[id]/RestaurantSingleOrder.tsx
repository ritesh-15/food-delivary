import { useState } from "react";
import { SelectBox } from "../../../components";
import Button from "../../../styles/Button";
import {
  Actions,
  FormControl,
  Grid,
  HeadingContainer,
  Image,
  MainContainer,
  RestaurantSingleOrderContainer,
  SubTitle,
  Title,
} from "./RestaurantSingleOrder.styled";

const OPTIONS = [
  "Order confirmed",
  "Preparing",
  "Out for delivary",
  "Delivared",
];

function RestaurantSingleOrder() {
  const [current, setCurrent] = useState<string>("");

  return (
    <RestaurantSingleOrderContainer>
      <SubTitle>Order status</SubTitle>
      <Actions>
        <SelectBox
          options={OPTIONS}
          current={current}
          changeCurrent={setCurrent}
          label="Change Status"
        />
        <Button hover>Process</Button>
      </Actions>
      <MainContainer>
        <SubTitle>User Details</SubTitle>
        <Grid>
          <FormControl>
            <h1>User ID</h1>
            <p>4789561236</p>
          </FormControl>
          <FormControl>
            <h1>User Name</h1>
            <p>11-02-2003</p>
          </FormControl>
          <FormControl>
            <h1>User email</h1>
            <p>riteshkhore@gmail.com</p>
          </FormControl>
          <FormControl>
            <h1>User Contact</h1>
            <p>9960130524</p>
          </FormControl>
        </Grid>
        <SubTitle>Order Details</SubTitle>
        <Grid>
          <FormControl>
            <h1>Order ID</h1>
            <p>4789561236</p>
          </FormControl>
          <FormControl>
            <h1>Ordered Date</h1>
            <p>11-02-2003</p>
          </FormControl>
          <FormControl>
            <h1>Payment status</h1>
            <p>unpaid</p>
          </FormControl>
          <FormControl>
            <h1>Total payment</h1>
            <p>Rs 451</p>
          </FormControl>
          <FormControl>
            <h1>Delivary address</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </FormControl>
          <FormControl>
            <h1>Quantity</h1>
            <p>4</p>
          </FormControl>
        </Grid>
      </MainContainer>
    </RestaurantSingleOrderContainer>
  );
}

export default RestaurantSingleOrder;
