import {
  Content,
  Heading,
  HeadingSubDiv,
  Wrapper,
} from "./AdminRestaurants.styled";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { RestaurantDetails } from "../../../components";

const AdminRestaurants = () => {
  return (
    <Wrapper>
      <Heading>
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
      <Content>
        <RestaurantDetails />
      </Content>
    </Wrapper>
  );
};

export default AdminRestaurants;
