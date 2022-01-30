import { useEffect } from "react";
import { useState } from "react";
import { FC } from "react";
import RestaurantApi from "../../api/restaurantApi";
import { Restaurant } from "../../components";
import { useMessage } from "../../hooks";
import { RestaurantInterface } from "../../interfaces/RestaurantInterface";
import Container from "../../styles/Container";
import {
  MainContainer,
  RestaurantsContainer,
  Title,
} from "./Restaurants.styled";
import RestaurantSkeleton from "./RestaurantSkeleton";

const Restaurants: FC = () => {
  // hooks
  const { setMessage } = useMessage();

  // restaurants state
  const [restaurants, setRestaurants] = useState<RestaurantInterface[]>([]);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getAllRestaurants = async () => {
      try {
        const { data } = await RestaurantApi.getAllRestaurants();
        if (data.ok) {
          setRestaurants(data.restaurants);
        }
        setLoading(false);
      } catch (error) {
        setMessage("Something went wrong!");
        setLoading(false);
      }
    };

    getAllRestaurants();
  }, []);

  return (
    <Container>
      <RestaurantsContainer>
        <Title>
          <h1>Restaurants in Pune</h1>
          <h4>order from 500 restaurants</h4>
        </Title>
        <MainContainer>
          {loading ? (
            <>
              <RestaurantSkeleton />
              <RestaurantSkeleton />
              <RestaurantSkeleton />
              <RestaurantSkeleton />
              <RestaurantSkeleton />
              <RestaurantSkeleton />
            </>
          ) : (
            restaurants.map((restaurant) => (
              <Restaurant restaurant={restaurant} key={restaurant._id} />
            ))
          )}
        </MainContainer>
      </RestaurantsContainer>
    </Container>
  );
};

export default Restaurants;
