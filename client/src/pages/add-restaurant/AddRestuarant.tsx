import { ChangeEvent, useEffect, useState } from "react";
import { AddRestaurantModal, Input, Map, SelectBox } from "../../components";
import Button from "../../styles/Button";
import Container from "../../styles/Container";
import {
  AddRestaurantContainer,
  FormContainer,
  FormControl,
  Heading,
  Row,
  Wrapper,
  Agreement,
  Table,
  TableHead,
  TH,
  TableBody,
  TR,
  TD,
  DocumentsDiv,
  MapContainer,
} from "./AddResturant.styled";
import PostAddIcon from "@mui/icons-material/PostAdd";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  useFetchLoading,
  useForm,
  useMessage,
  useSuccessModal,
} from "../../hooks";
import { newApplicationValidation } from "../../validations/application";
import axios from "axios";
import { uploadMultipleFile } from "../../api/uploadDocumentApi";
import { newApplicationApi } from "../../api/applicationApi";

const FOOD_TYPE = ["Vegiterian", "Non vegeterian", "Both"];

interface ApplicationState {
  name: string;
  famousFor: string;
  numberOfFoodProducts: string;
  minimumFoodPrice: string;
  numberOfDailyCustomers: string;
  email: string;
  number: string;
}

const initialState: ApplicationState = {
  name: "",
  numberOfFoodProducts: "",
  famousFor: "",
  minimumFoodPrice: "",
  numberOfDailyCustomers: "",
  email: "",
  number: "",
};

export default function AddRestuarant() {
  const [isSubmited, setIsSubmited] = useState<boolean>(false);
  const [foodType, setFoodType] = useState<string>("");
  const [isAgreed, setIsAgreed] = useState<boolean>(false);
  const { setIsLoading } = useFetchLoading();
  const { setMessage } = useMessage();
  const { setSuccessModal } = useSuccessModal();

  const [cordinates, setCordinates] = useState<number[]>();
  const [addressInfo, setAddressInfo] = useState({
    cordinates: {
      lat: 0,
      lng: 0,
    },
    placeName: "",
    country: "",
    state: "",
    district: "",
    locality: "",
    pinCode: "",
  });

  const changeCordinates = (values: number[]) => {
    setCordinates(values);
  };

  // documents state
  const [restaurantImage, setRestaurantImage] = useState<File | string>("");
  const [identityProof, setIdentityProof] = useState<File | string>("");
  const [foodCertificate, setFoodCetificate] = useState<File | string>("");

  const setDocument = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;

    if (!files) return;

    const file = files[0];

    if (name === "restaurantImage") {
      setRestaurantImage(file);
    } else if (name === "identityProof") {
      setIdentityProof(file);
    } else if (name === "foodCertificate") {
      setFoodCetificate(file);
    }
  };

  // get the cordinates from the map
  const getUserLocation = async () => {
    if (!cordinates) return;
    try {
      const { data } = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${cordinates[0]},${cordinates[1]}.json?limit=1&types=postcode%2Caddress%2Clocality%2Cdistrict%2Cpoi%2Cregion%2Ccountry%2Cplace%2Cneighborhood&access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
      );

      const location = data.features[0];

      setAddressInfo(() => {
        return {
          placeName: location?.place_name,
          cordinates: { lat: location?.center[0], lng: location?.center[1] },
          country: location.context.filter((e: any) =>
            e.id.includes("country")
          )[0]?.text,
          state: location.context.filter((e: any) => e.id.includes("region"))[0]
            ?.text,
          district: location.context.filter((e: any) =>
            e.id.includes("district")
          )[0]?.text,
          locality: location.context.filter((e: any) =>
            e.id.includes("place")
          )[0]?.text,
          pinCode: "",
        };
      });
    } catch (err) {}
  };

  useEffect(() => {
    getUserLocation();
  }, [cordinates]);

  // upload the documents
  const uploadDocuments = async () => {
    const formdata = new FormData();

    formdata.append("file", restaurantImage);
    formdata.append("file", identityProof);
    formdata.append("file", foodCertificate);

    try {
      const { data } = await uploadMultipleFile(formdata);
      return data.files;
    } catch (error: any) {}
  };

  const createNewApplication = async (values: ApplicationState) => {
    if (!restaurantImage || !identityProof || !foodCertificate || !foodType)
      return setMessage("All fields are required!", true);

    setIsLoading(true);

    try {
      const files: any = await uploadDocuments();
      const sendData = {
        restaurantInfo: { ...values, foodType },
        addressInfo: {
          cordinates: {
            lat: addressInfo.cordinates.lat,
            lng: addressInfo.cordinates.lng,
          },
          placeName: addressInfo.placeName,
          country: addressInfo.country,
          state: addressInfo.state,
          district: addressInfo.district,
          locality: addressInfo.locality,
          pinCode: parseInt(addressInfo.pinCode),
        },
        isAgreed,
        documents: files.map((file: any) => {
          return {
            filename: file.filename,
            destination: file.destination,
            nameOfDocuement: file.originalname,
            filepath: file.filename,
          };
        }),
      };

      const { data } = await newApplicationApi(sendData);

      if (data.ok) {
        setSuccessModal("Application has been submited successfully!");
      }
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      setMessage(error.response.data.error.message, true);
    }
  };

  const { values, handleChange, handleSubmit, errors } = useForm(
    initialState,
    newApplicationValidation,
    createNewApplication
  );

  return (
    <Wrapper>
      <Container>
        {isSubmited && <AddRestaurantModal />}
        <AddRestaurantContainer>
          <Heading>
            <h1>Hey, Ritesh welcome to foodies application portal !</h1>
            <p>
              Please complete the following steps to complete the application
              process.
            </p>
          </Heading>
          <FormContainer onSubmit={handleSubmit}>
            <h1>Restaurant Details</h1>
            <Row>
              <FormControl>
                <Input
                  name="name"
                  title="Restaurant name"
                  value={values.name}
                  onChange={handleChange}
                  type="text"
                  error={errors.name}
                />
              </FormControl>
              <FormControl>
                <Input
                  name="famousFor"
                  title="Famous for"
                  value={values.fomousFor}
                  onChange={handleChange}
                  type="text"
                  error={errors.famousFor}
                />
              </FormControl>
              <FormControl>
                <Input
                  name="email"
                  title="Email address"
                  value={values.email}
                  onChange={handleChange}
                  type="email"
                  error={errors.email}
                />
              </FormControl>
              <FormControl>
                <Input
                  name="number"
                  title="Contact number"
                  value={values.number}
                  onChange={handleChange}
                  type="text"
                  error={errors.number}
                />
              </FormControl>
              <FormControl>
                <Input
                  name="numberOfFoodProducts"
                  title="Number of food products availabel"
                  value={values.numberOfFoods}
                  onChange={handleChange}
                  type="text"
                  error={errors.numberOfFoodProducts}
                />
              </FormControl>
              <FormControl>
                <SelectBox
                  options={FOOD_TYPE}
                  current={foodType}
                  label="Select food type"
                  changeCurrent={setFoodType}
                />
              </FormControl>
              <FormControl>
                <Input
                  name="minimumFoodPrice"
                  title="Minimum price of food"
                  value={values.minimumFoodPrice}
                  onChange={handleChange}
                  type="text"
                  error={errors.minimumFoodPrice}
                />
              </FormControl>
              <FormControl>
                <Input
                  name="numberOfDailyCustomers"
                  title="Number of daily customers"
                  value={values.numberOfDailyCustomers}
                  onChange={handleChange}
                  type="text"
                  error={errors.numberOfDailyCustomers}
                />
              </FormControl>
            </Row>
            <h1>Location details</h1>
            <MapContainer>
              <Map
                currentCordinates={cordinates}
                setCurrentCordinates={changeCordinates}
              />
            </MapContainer>
            <Row>
              <FormControl>
                <Input
                  name="pinCode"
                  title="Pin Code"
                  value={values.pinCode}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setAddressInfo({ ...addressInfo, pinCode: e.target.value })
                  }
                  type="text"
                  error={errors.pinCode}
                />
              </FormControl>
            </Row>
            <DocumentsDiv>
              <h1>Upload required documents</h1>
              <Table>
                <TableHead>
                  <TR>
                    <TH>Doucment name</TH>
                    <TH>Upload status</TH>
                    <TH>Action</TH>
                  </TR>
                </TableHead>
                <TableBody>
                  <TR>
                    <TD>
                      <p>Image of restaurant</p>
                    </TD>
                    <TD status={!restaurantImage ? "Missing" : "Uploaded"}>
                      <small>
                        {restaurantImage ? "Uploaded" : "Not uploaded"}
                      </small>
                    </TD>
                    <TD>
                      {restaurantImage ? (
                        <CheckCircleIcon />
                      ) : (
                        <>
                          <label htmlFor="file">
                            <CloudUploadIcon
                              style={{
                                color: "hsl(0,0%,50%)",
                                cursor: "pointer",
                              }}
                            />
                          </label>
                          <input
                            name="restaurantImage"
                            onChange={setDocument}
                            type="file"
                            id="file"
                          />
                        </>
                      )}
                    </TD>
                  </TR>
                  <TR>
                    <TD>
                      <p>Applicant Identity proof</p>
                    </TD>
                    <TD status={!identityProof ? "Missing" : "Uploaded"}>
                      <small>
                        {identityProof ? "Uploaded" : "Not uploaded"}
                      </small>
                    </TD>
                    <TD>
                      {identityProof ? (
                        <CheckCircleIcon />
                      ) : (
                        <>
                          <label htmlFor="file">
                            <CloudUploadIcon
                              style={{
                                color: "hsl(0,0%,50%)",
                                cursor: "pointer",
                              }}
                            />
                          </label>
                          <input
                            name="identityProof"
                            onChange={setDocument}
                            type="file"
                            id="file"
                          />
                        </>
                      )}
                    </TD>
                  </TR>
                  <TR>
                    <TD>
                      <p>Food authority certificate</p>
                    </TD>
                    <TD status={!foodCertificate ? "Missing" : "Uploaded"}>
                      <small>
                        {foodCertificate ? "Uploaded" : "Not uploaded"}
                      </small>
                    </TD>
                    <TD>
                      {foodCertificate ? (
                        <CheckCircleIcon />
                      ) : (
                        <>
                          <label htmlFor="file">
                            <CloudUploadIcon
                              style={{
                                color: "hsl(0,0%,50%)",
                                cursor: "pointer",
                              }}
                            />
                          </label>
                          <input
                            name="foodCertificate"
                            onChange={setDocument}
                            type="file"
                            id="file"
                          />
                        </>
                      )}
                    </TD>
                  </TR>
                </TableBody>
              </Table>
            </DocumentsDiv>
            <h1>Agreement</h1>
            <Agreement>
              <input onClick={(e) => setIsAgreed(true)} type="checkbox" />
              <p>
                By clicking you are agreed our terms and condition of working
                with you.
              </p>
            </Agreement>
            <Button
              disabled={!isAgreed}
              type="submit"
              onClick={handleSubmit}
              hover
            >
              <PostAddIcon />
              <span>Submit application</span>
            </Button>
          </FormContainer>
        </AddRestaurantContainer>
      </Container>
    </Wrapper>
  );
}
