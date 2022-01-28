import Container from "../../../styles/Container";
import {
  Actions,
  FormControl,
  Grid,
  HeadingContainer,
  Image,
  LocationNote,
  MainContainer,
  MapContainer,
  SubTitle,
  Title,
  Wrapper,
} from "./RestaurantDetails.styled";
import Button from "../../../styles/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { Map, SelectBox, UpdateInput } from "../../../components";
import { ChangeEvent, useEffect, useState } from "react";
import { RestaurantInterface } from "../../../interfaces/RestaurantInterface";
import { useFetchLoading, useMessage, useSocket } from "../../../hooks";
import SaveIcon from "@mui/icons-material/Save";

import RestaurantApi from "../../../api/restaurantApi";
import { uploadSingleFileApi } from "../../../api/uploadDocumentApi";

const FOOD_OPTIONS = [
  "Vegeterian",
  "Non vegeterain",
  "Vegeterian and non vegeterian",
];

const Restaurantrestaurant = () => {
  // hooks
  const { setMessage } = useMessage();
  const { setIsLoading } = useFetchLoading();

  // restaurants state
  const [restaurant, setRestaurant] = useState<RestaurantInterface>();

  // food type state
  const [foodType, setFoodType] = useState<string>("");

  // restaurant image state
  const [updatedImageFile, setUpdateImageFile] = useState<File>();

  const changeImageFile = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (!files) return;

    const file = files[0];

    if (!file) return;
    setUpdateImageFile(file);
  };

  // change restaurant info details
  const changeRestaurantInfo = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    if (!restaurant) return;

    setRestaurant({
      ...restaurant,
      restaurantInfo: { ...restaurant.restaurantInfo, [name]: value },
    });
  };

  // upload single file
  const uploadSingleFile = async (file: File) => {
    const formdata = new FormData();
    formdata.append("file", file);
    return await (
      await uploadSingleFileApi(formdata)
    ).data.fileInfo;
  };

  // update restaurant request
  const updaterestaurant = async () => {
    if (!restaurant) return;

    let updateImageData = null;

    if (updatedImageFile) {
      updateImageData = await uploadSingleFile(updatedImageFile);
    }

    const body: any = {
      restaurantInfo: {
        ...restaurant.restaurantInfo,
        foodType: foodType || restaurant.restaurantInfo.foodType,
      },
    };

    if (updateImageData) {
      body.images = {
        url: `http://localhost:5000/uploads/${updateImageData.filename}`,
        filename: updateImageData.filename,
        fileType: updateImageData.type,
      };
    }
    setIsLoading(true);
    try {
      const { data } = await RestaurantApi.updateRestaurant(
        body,
        restaurant._id
      );
      if (data.ok) {
        setRestaurant(data.restaurant);
        setMessage("Updated successfully!");
      }
      setIsLoading(false);
    } catch (error) {
      setMessage("Something went wrong!");
      setIsLoading(false);
    }
  };

  // fetch the data
  const getRestaurantDetails = async () => {
    setIsLoading(true);
    try {
      const { data } = await RestaurantApi.getRestaurantByUserId();
      if (data.ok) {
        setRestaurant(data.restaurant);
        setFoodType(data.restaurant.restaurantInfo.foodType);
      }
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      setMessage(error.response.data.error.message, true);
    }
  };

  useEffect(() => {
    getRestaurantDetails();
  }, []);

  return (
    <Container>
      <Wrapper>
        <HeadingContainer>
          <label htmlFor="file">
            <Image>
              <img
                src={
                  updatedImageFile
                    ? URL.createObjectURL(updatedImageFile)
                    : restaurant?.images.url
                }
                alt=""
              />
              <input type="file" id="file" onChange={changeImageFile} />
            </Image>
          </label>
          <Title status={restaurant?.status}>
            <h1>{restaurant?.restaurantInfo.name}</h1>
            <p>{restaurant?.restaurantInfo.famousFor}</p>
            <span>{restaurant?.addressInfo.placeName}</span>
            <small>{restaurant?.status}</small>
          </Title>
        </HeadingContainer>
        <MainContainer>
          <SubTitle>Owner Details</SubTitle>
          <Grid>
            <FormControl>
              <h1>Owner Name</h1>
              <p>{restaurant?.userId.name}</p>
            </FormControl>
            <FormControl>
              <h1>Owner ID</h1>
              <p>{restaurant?.userId._id}</p>
            </FormControl>
            <FormControl>
              <h1>Owner Email Address</h1>
              <p>{restaurant?.userId.email}</p>
            </FormControl>
            <FormControl>
              <h1>Owner Contact</h1>
              <p>{restaurant?.userId.number}</p>
            </FormControl>
          </Grid>
          <SubTitle>Restaurant Details</SubTitle>
          <Grid>
            <UpdateInput
              title="Restaurant name"
              value={restaurant?.restaurantInfo.name}
              name="name"
              onChange={changeRestaurantInfo}
            />

            <UpdateInput
              title="Famous for"
              value={restaurant?.restaurantInfo.famousFor}
              name="famousFor"
              onChange={changeRestaurantInfo}
            />
            <UpdateInput
              title="Number of food products"
              value={restaurant?.restaurantInfo.numberOfFoodProducts.toString()}
              name="numberOfFoodProducts"
              onChange={changeRestaurantInfo}
            />
            <FormControl>
              <h1>Change food type</h1>
              <SelectBox
                current={foodType}
                label="Change food type"
                options={FOOD_OPTIONS}
                changeCurrent={setFoodType}
              />
            </FormControl>
            <UpdateInput
              title="Minimum food price"
              value={restaurant?.restaurantInfo.minimumFoodPrice.toString()}
              name="minimumFoodPrice"
              onChange={changeRestaurantInfo}
            />
            <UpdateInput
              title="Number of daily customers"
              value={restaurant?.restaurantInfo.numberOfDailyCustomers.toString()}
              name="numberOfDailyCustomers"
              onChange={changeRestaurantInfo}
            />
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
          <LocationNote>You cannot update your location details</LocationNote>
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
          <Button onClick={updaterestaurant} hover>
            <SaveIcon />
            <span>Save and Update</span>
          </Button>
        </Actions>
      </Wrapper>
    </Container>
  );
};

export default Restaurantrestaurant;
