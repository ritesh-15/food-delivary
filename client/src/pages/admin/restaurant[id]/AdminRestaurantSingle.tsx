import { useEffect, useState } from "react";
import {
  Actions,
  FormControl,
  Grid,
  HeadingContainer,
  Image,
  MainContainer,
  OrdersChart,
  SubTitle,
  Title,
  Wrapper,
  MapContainer,
  ActionSelectBox,
} from "./AdminRestaurantSingle.styled";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
import Button from "../../../styles/Button";
import { Block, Delete } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import RestaurantApi from "../../../api/restaurantApi";
import { useFetchLoading, useMessage } from "../../../hooks";
import { RestaurantInterface } from "../../../interfaces/RestaurantInterface";
import moment from "moment";
import { InfoSkeleton, Map, SelectBox } from "../../../components";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  BarElement
);

const OPTIONS = ["active", "suspended"];

const AdminRestaurantSingle = () => {
  // hooks
  const { id } = useParams();
  const { setIsLoading } = useFetchLoading();
  const navigate = useNavigate();
  const { setMessage } = useMessage();

  // loading state
  const [loading, setLoading] = useState<boolean>(true);

  // status
  const [status, setStatus] = useState<string>("");

  // restaurant state
  const [restaurant, setRestaurant] = useState<RestaurantInterface>();

  const deleteRestaurant = async () => {
    if (!id) return;
    setIsLoading(true);
    try {
      await RestaurantApi.deleteRestaurant(id);
      setMessage("Restaurant deleted successfully!");
      setIsLoading(false);
      navigate("/admin/restaurants");
    } catch (error) {
      setIsLoading(false);
      setMessage("Something went wrong!");
    }
  };

  useEffect(() => {
    if (!id) return;

    const getRestaurantDetails = async () => {
      try {
        const { data } = await RestaurantApi.getSingleRestaurant(id);
        if (data.ok) {
          setRestaurant(data.restaurant);
          setStatus(data.restaurant.status);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setMessage("Something went wrong!");
      }
    };

    getRestaurantDetails();
  }, [id]);

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Orders",
        data: [1, 2, 3, 4, 2, 3, 5, 7, 4, 5.7, 4, 6],
        borderWidth: 1,
        tension: 0.25,
        backgroundColor: "hsl(349, 79%, 54%)",
        borderColor: "hsl(349, 79%, 54%)",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
      {loading ? (
        <InfoSkeleton />
      ) : (
        <Wrapper>
          <HeadingContainer>
            <Image>
              <img src={restaurant?.images.url} alt="" />
            </Image>
            <Title status={restaurant?.status}>
              <h1>{restaurant?.restaurantInfo.name}</h1>
              <p>{restaurant?.restaurantInfo.famousFor}</p>
              <span>{restaurant?.addressInfo.placeName}</span>
              <small>{restaurant?.status}</small>
            </Title>
          </HeadingContainer>
          <ActionSelectBox>
            <SelectBox
              label="Select action"
              options={OPTIONS}
              current={status}
              changeCurrent={setStatus}
            />
            <Button hover>Save And Process</Button>
          </ActionSelectBox>
          <MainContainer>
            <SubTitle>Basic information</SubTitle>
            <Grid>
              <FormControl>
                <h1>Restaurant ID</h1>
                <p>{restaurant?.restaurantID}</p>
              </FormControl>
              <FormControl>
                <h1>Registration Date</h1>
                <p>
                  {restaurant &&
                    moment(restaurant.createdAt).format("DD MMMM YYYY")}
                </p>
              </FormControl>
              <FormControl>
                <h1>Owner Name</h1>
                <p>{restaurant?.userId.name} </p>
              </FormControl>
              <FormControl>
                <h1>Onwer user ID</h1>
                <p>{restaurant?.userId._id} </p>
              </FormControl>
              <FormControl>
                <h1>Owner Email Address</h1>
                <p>{restaurant?.userId.email} </p>
              </FormControl>
              <FormControl>
                <h1>Owner contact number</h1>
                <p>{restaurant?.userId.number} </p>
              </FormControl>
            </Grid>
            <SubTitle>Restaurant Details</SubTitle>
            <Grid>
              <FormControl>
                <h1>Restaurnt Name</h1>
                <p>{restaurant?.restaurantInfo.name} </p>
              </FormControl>
              <FormControl>
                <h1>Famous For </h1>
                <p>{restaurant?.restaurantInfo.famousFor} </p>
              </FormControl>
              <FormControl>
                <h1>Number of food products</h1>
                <p>{restaurant?.restaurantInfo.numberOfFoodProducts} </p>
              </FormControl>
              <FormControl>
                <h1>Food type</h1>
                <p>{restaurant?.restaurantInfo.foodType} </p>
              </FormControl>
              <FormControl>
                <h1>Minimum food price</h1>
                <p>Rs {restaurant?.restaurantInfo.minimumFoodPrice} </p>
              </FormControl>
              <FormControl>
                <h1>Number of daily customers</h1>
                <p>{restaurant?.restaurantInfo.numberOfDailyCustomers} </p>
              </FormControl>
            </Grid>

            <SubTitle>Location details</SubTitle>
            <MapContainer>
              {restaurant && (
                <Map
                  currentCordinates={[
                    restaurant.addressInfo.cordinates.lat,
                    restaurant.addressInfo.cordinates.lng,
                  ]}
                />
              )}
            </MapContainer>

            <Grid>
              <FormControl>
                <h1>Country</h1>
                <p>{restaurant?.addressInfo.country}</p>
              </FormControl>
              <FormControl>
                <h1>State</h1>
                <p>{restaurant?.addressInfo.state}</p>
              </FormControl>
              <FormControl>
                <h1>District</h1>
                <p>{restaurant?.addressInfo.district}</p>
              </FormControl>
              <FormControl>
                <h1>Place name</h1>
                <p>{restaurant?.addressInfo.placeName}</p>
              </FormControl>
              <FormControl>
                <h1>Locality</h1>
                <p>{restaurant?.addressInfo.locality}</p>
              </FormControl>
              <FormControl>
                <h1>Pin code</h1>
                <p>{restaurant?.addressInfo.pinCode}</p>
              </FormControl>
            </Grid>
          </MainContainer>
          <Actions>
            <Button onClick={deleteRestaurant} hover>
              <Delete />
              <span>Delete Restaurant</span>
            </Button>
          </Actions>
          <OrdersChart>
            <h1>Orders Per Month</h1>
            <Line data={data} options={options} />
          </OrdersChart>
        </Wrapper>
      )}
    </>
  );
};

export default AdminRestaurantSingle;
