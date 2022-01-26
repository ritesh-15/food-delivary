import Container from "../../styles/Container";
import {
  Actions,
  DetailsSkeleton,
  FormControl,
  Grid,
  HeadingContainer,
  Image,
  ImageSkeleton,
  LocationNote,
  MainContainer,
  MapContainer,
  SkeletonContainer,
  SubTitle,
  Table,
  TableBody,
  TableHead,
  TD,
  TH,
  Title,
  TR,
  Wrapper,
} from "./RestaurantApplication.styled";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Button from "../../styles/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { Map, SkeletonElement, UpdateInput } from "../../components";
import { ChangeEvent, useEffect, useState } from "react";
import { ApplicationInterface } from "../../interfaces/ApplicationInterface";
import {
  deleteApplicationApi,
  getApplication,
  updateApplicationApi,
} from "../../api/applicationApi";
import moment from "moment";
import SaveIcon from "@mui/icons-material/Save";
import { useFetchLoading, useMessage } from "../../hooks";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

const RestaurantApplication = () => {
  // hooks
  const { setMessage } = useMessage();
  const { setIsLoading } = useFetchLoading();
  const navigate = useNavigate();

  // applications state
  const [application, setApplication] = useState<ApplicationInterface>();

  // change restaurant info details
  const changeRestaurantInfo = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    if (!application) return;

    setApplication({
      ...application,
      restaurantInfo: { ...application.restaurantInfo, [name]: value },
    });
  };

  // delete application form
  const deleteApplicationForm = async () => {
    if (!application) return;

    setIsLoading(true);

    try {
      const { data } = await deleteApplicationApi(application._id);
      if (data.ok) {
        setMessage("Application delete succesfully!");
        navigate("/");
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setMessage("Something went wrong!");
    }
  };

  // update application request
  const updateApplication = async () => {
    if (!application) return;
    setIsLoading(true);
    try {
      const { data } = await updateApplicationApi(
        application,
        application?._id
      );
      if (data.ok) {
        setApplication(data.application);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setMessage("Something went wrong, please try again!", true);
    }
  };

  // fetch the data
  const getApplicationDetails = async () => {
    setIsLoading(true);
    try {
      const { data } = await getApplication();
      if (data.ok) {
        setApplication(() => data.application);
      }
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      if (error.response.data.error.status === 404) {
        // application not found
        setMessage("Application not found!");
        navigate("/");
      }
      setMessage(error.response.data.error.message, true);
    }
  };

  useEffect(() => {
    getApplicationDetails();
  }, []);

  return (
    <Container>
      <Wrapper>
        <HeadingContainer>
          <Image>
            <img
              src="https://images.unsplash.com/photo-1642420805609-157d2f1a7f1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </Image>
          <Title status={application?.status}>
            <h1>{application?.restaurantInfo.name}</h1>
            <p>{application?.restaurantInfo.famousFor}</p>
            <span>{application?.addressInfo.placeName}</span>
            <small>{application?.status}</small>
          </Title>
        </HeadingContainer>
        <MainContainer>
          <SubTitle>Application Details</SubTitle>
          <Grid>
            <FormControl>
              <h1>Application ID</h1>
              <p>{application?._id}</p>
            </FormControl>
            <FormControl>
              <h1>Application Date</h1>
              <p>
                {application &&
                  moment(application.createdAt).format("DD MMMM YYYY")}
              </p>
            </FormControl>
          </Grid>
          <SubTitle>Applicant Details</SubTitle>
          <Grid>
            <FormControl>
              <h1>Applicant Name</h1>
              <p>{application?.userId.name}</p>
            </FormControl>
            <FormControl>
              <h1>Applicant ID</h1>
              <p>{application?.userId._id}</p>
            </FormControl>
            <FormControl>
              <h1>Applicant Email Address</h1>
              <p>{application?.userId.email}</p>
            </FormControl>
            <FormControl>
              <h1>Applicant Contact</h1>
              <p>{application?.userId.number}</p>
            </FormControl>
          </Grid>
          <SubTitle>Restaurant Details</SubTitle>
          <Grid>
            <UpdateInput
              title="Restaurant name"
              value={application?.restaurantInfo.name}
              name="name"
              onChange={changeRestaurantInfo}
            />

            <UpdateInput
              title="Famous for"
              value={application?.restaurantInfo.famousFor}
              name="famousFor"
              onChange={changeRestaurantInfo}
            />
            <UpdateInput
              title="Number of food products"
              value={application?.restaurantInfo.numberOfFoodProducts.toString()}
              name="numberOfFoodProducts"
              onChange={changeRestaurantInfo}
            />
            <FormControl>
              <h1>Food type</h1>
              <p>{application?.restaurantInfo.foodType}</p>
            </FormControl>
            <UpdateInput
              title="Minimum food price"
              value={application?.restaurantInfo.minimumFoodPrice.toString()}
              name="minimumFoodPrice"
              onChange={changeRestaurantInfo}
            />
            <UpdateInput
              title="Number of daily customers"
              value={application?.restaurantInfo.numberOfDailyCustomers.toString()}
              name="numberOfDailyCustomers"
              onChange={changeRestaurantInfo}
            />
          </Grid>

          <SubTitle>Location details</SubTitle>

          <MapContainer>
            {application && (
              <Map
                currentCordinates={[
                  application.addressInfo.cordinates.lat,
                  application.addressInfo.cordinates.lng,
                ]}
              />
            )}
          </MapContainer>
          <LocationNote>You cannot update your location details</LocationNote>
          <Grid>
            <FormControl>
              <h1>Country</h1>
              <p>{application?.addressInfo.country}</p>
            </FormControl>
            <FormControl>
              <h1>State</h1>
              <p>{application?.addressInfo.state}</p>
            </FormControl>
            <FormControl>
              <h1>District</h1>
              <p>{application?.addressInfo.district}</p>
            </FormControl>
            <FormControl>
              <h1>Place name</h1>
              <p>{application?.addressInfo.placeName}</p>
            </FormControl>
            <FormControl>
              <h1>Locality</h1>
              <p>{application?.addressInfo.locality}</p>
            </FormControl>
            <FormControl>
              <h1>Pin code</h1>
              <p>{application?.addressInfo.pinCode}</p>
            </FormControl>
          </Grid>
          <SubTitle>Documents uploaded</SubTitle>
          <Table>
            <TableHead>
              <TR>
                <TH>Document name</TH>
                <TH>Action</TH>
              </TR>
            </TableHead>
            <TableBody>
              <TR>
                <TD>
                  <p>Applicant identity proof</p>
                </TD>
                <TD>
                  <RemoveRedEyeIcon
                    style={{ color: "hsl(0,0%,40%)", cursor: "pointer" }}
                  />
                </TD>
              </TR>
              <TR>
                <TD>
                  <p>Food authority certificate</p>
                </TD>
                <TD>
                  <RemoveRedEyeIcon
                    style={{ color: "hsl(0,0%,40%)", cursor: "pointer" }}
                  />
                </TD>
              </TR>
            </TableBody>
          </Table>
        </MainContainer>
        <Actions>
          {application?.status === "rejected" && (
            <Button
              onClick={updateApplication}
              style={{ marginRight: "1em" }}
              hover
            >
              <SaveIcon />
              <span>Save Application</span>
            </Button>
          )}
          <Button onClick={deleteApplicationForm} hover>
            <DeleteIcon />
            <span>Delete Application</span>
          </Button>
        </Actions>
      </Wrapper>
    </Container>
  );
};

export default RestaurantApplication;
