import { FC } from "react";
import { Restaurant } from "../../components";
import Container from "../../styles/Container";
import {
  MainContainer,
  RestaurantsContainer,
  Title,
} from "./Restaurants.styled";
import RestaurantSkeleton from "./RestaurantSkeleton";

const Restaurants: FC = () => {
  return (
    <Container>
      <RestaurantsContainer>
        <Title>
          <h1>Restaurants in Pune</h1>
          <h4>order from 500 restaurants</h4>
        </Title>
        <MainContainer>
          <Restaurant />
          <Restaurant />
          <Restaurant />
          <RestaurantSkeleton />
          <RestaurantSkeleton />
          <RestaurantSkeleton />
        </MainContainer>
      </RestaurantsContainer>
    </Container>
  );
};

export default Restaurants;
