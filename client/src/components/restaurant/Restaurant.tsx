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
import { RestaurantInterface } from "../../interfaces/RestaurantInterface";
import { Link } from "react-router-dom";

interface RestaurantProps {
  restaurant: RestaurantInterface;
}

const Restaurant: FC<RestaurantProps> = ({ restaurant }) => {
  return (
    <Link to={`/restaurants/${restaurant._id}`}>
      <RestaurantContainer>
        <RestaurantImage>
          <img src={restaurant.images.url} alt="" />
        </RestaurantImage>
        <RestaurantInfo>
          <Heading>
            <Flex>
              <h1>{restaurant.restaurantInfo.name}</h1>
              <Rating>
                <Star style={{ fontSize: "0.85rem" }} />
                <span>0</span>
              </Rating>
            </Flex>
          </Heading>
          <SubHeading>
            <Flex>
              <h4>{restaurant.restaurantInfo.famousFor}</h4>
              <span>RS 150 for one</span>
            </Flex>
          </SubHeading>
        </RestaurantInfo>
      </RestaurantContainer>
    </Link>
  );
};

export default Restaurant;
