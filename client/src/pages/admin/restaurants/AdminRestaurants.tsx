import {
  Content,
  Heading,
  HeadingSubDiv,
  Wrapper,
} from "./AdminRestaurants.styled";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { RestaurantDetails } from "../../../components";
import { useState } from "react";

const AdminRestaurants = () => {
  const [open, setOpen] = useState<number>(0);

  const toggleOpen = (index: number) => {
    if (open === index) {
      return setOpen(0);
    }

    setOpen(index);
  };

  return (
    <Wrapper>
      <Heading onClick={() => toggleOpen(1)}>
        <HeadingSubDiv>
          <h1>Restaurant ID</h1>
          <p>145612367889</p>
        </HeadingSubDiv>
        <HeadingSubDiv>
          <h1>Registration Date</h1>
          <p>11 Jan 2022</p>
        </HeadingSubDiv>
        <HeadingSubDiv>
          <h1>Food Type</h1>
          <p>Vegeterian</p>
        </HeadingSubDiv>
        <HeadingSubDiv>
          <h1>Status</h1>
          <span>Active</span>
        </HeadingSubDiv>
        <HeadingSubDiv>
          <KeyboardArrowDown style={{ color: "#fff" }} />
        </HeadingSubDiv>
      </Heading>
      {open === 1 && (
        <Content>
          <RestaurantDetails />
        </Content>
      )}
      <Heading onClick={() => toggleOpen(2)}>
        <HeadingSubDiv>
          <h1>Restaurant ID</h1>
          <p>145612367889</p>
        </HeadingSubDiv>
        <HeadingSubDiv>
          <h1>Registration Date</h1>
          <p>11 Jan 2022</p>
        </HeadingSubDiv>
        <HeadingSubDiv>
          <h1>Food Type</h1>
          <p>Vegeterian</p>
        </HeadingSubDiv>
        <HeadingSubDiv>
          <h1>Status</h1>
          <span>Active</span>
        </HeadingSubDiv>
        <HeadingSubDiv>
          <KeyboardArrowDown style={{ color: "#fff" }} />
        </HeadingSubDiv>
      </Heading>
      {open === 2 && (
        <Content>
          <RestaurantDetails />
        </Content>
      )}
    </Wrapper>
  );
};

export default AdminRestaurants;
