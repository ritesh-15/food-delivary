import { FC } from "react";
import Flex from "../../styles/Flex";
import {
  Heading,
  Rating,
  RestaurantContainer,
  RestaurantImage,
  RestaurantInfo,
  SubHeading,
} from "./Restaurant.styled";
import { Star } from "@mui/icons-material";

const Restaurant: FC = () => {
  return (
    <RestaurantContainer>
      <RestaurantImage>
        <img
          src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
      </RestaurantImage>
      <RestaurantInfo>
        <Heading>
          <Flex>
            <h1>Kothrud Bowl Company</h1>
            <Rating>
              <Star style={{ fontSize: "0.85rem" }} />
              <span>4.2</span>
            </Rating>
          </Flex>
        </Heading>
        <SubHeading>
          <Flex>
            <h4>North Indian, Chinese, Continental</h4>
            <span>RS 150 for one</span>
          </Flex>
        </SubHeading>
      </RestaurantInfo>
    </RestaurantContainer>
  );
};

export default Restaurant;
