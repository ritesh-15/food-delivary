import { Link } from "react-router-dom";
import {
  SearchDiv,
  Table,
  TableBody,
  TableHead,
  TableWrapper,
  TD,
  TH,
  TR,
  Wrapper,
} from "./RestaurantDetails.styled";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import RestaurantApi from "../../api/restaurantApi";
import { RestaurantInterface } from "../../interfaces/RestaurantInterface";
import moment from "moment";
import { useFetchLoading, useMessage } from "../../hooks";

const RestaurantDetails = () => {
  // hooks
  const { setIsLoading } = useFetchLoading();
  const { setMessage } = useMessage();

  const [restaurants, setRestaurants] = useState<RestaurantInterface[]>([]);

  useEffect(() => {
    const getRestaurants = async () => {
      setIsLoading(true);
      try {
        const { data } = await RestaurantApi.getAllRestaurants();
        if (data.ok) {
          setRestaurants(data.restaurants);
        }
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setMessage("Something went wrong");
      }
    };

    getRestaurants();
  }, []);

  return (
    <Wrapper>
      <SearchDiv>
        <div>
          <SearchIcon style={{ color: "hsl(0,0%,40%)" }} />
          <input type="text" placeholder="Search restaurant" />
        </div>
      </SearchDiv>
      <TableWrapper>
        <Table>
          <TableHead>
            <TR>
              <TH>Restaurant ID</TH>
              <TH>Restaurant Name</TH>
              <TH>Restaurant Status</TH>
              <TH>Registration Date</TH>
            </TR>
          </TableHead>
          <TableBody>
            {restaurants.map((restaurant) => (
              <TR key={restaurant._id}>
                <TD>
                  <Link to={`/admin/restaurants/${restaurant._id}`}>
                    {restaurant._id}
                  </Link>
                </TD>
                <TD>
                  <p>{restaurant.restaurantInfo.name}</p>
                </TD>
                <TD>
                  <small>{restaurant.status}</small>
                </TD>
                <TD>{moment(restaurant.createdAt).format("DD MMMM YYYY")}</TD>
              </TR>
            ))}
          </TableBody>
        </Table>
      </TableWrapper>
    </Wrapper>
  );
};

export default RestaurantDetails;
