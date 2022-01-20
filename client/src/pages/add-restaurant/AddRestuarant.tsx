import { ChangeEvent, useState } from "react";
import { AddRestaurantModal, Input, SelectBox } from "../../components";
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
} from "./AddResturant.styled";
import PostAddIcon from "@mui/icons-material/PostAdd";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const FOOD_TYPE = ["Vegiterian", "Non vegeterian", "Both"];

export default function AddRestuarant() {
  const [values, setValues] = useState({
    name: "",
    subDetails: "",
    numberOfFoods: "",
    minimumPriceOfFood: "",
    city: "",
    pinCode: "",
    contactNumber: "",
    emailAddress: "",
    dailyCustomers: "",
  });

  const [isSubmited, setIsSubmited] = useState(false);
  const [foodType, setFoodType] = useState("");

  // documents state
  const [restaurantImage, setRestaurantImage] = useState<File | string>("");
  const [identityProof, setIdentityProof] = useState<File | string>("");
  const [foodCertificate, setFoodCetificate] = useState<File | string>("");

  const setDocument = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;

    if (!files) return;

    const file = files[0];

    console.log(name);

    if (name === "restaurantImage") {
      setRestaurantImage(file);
    } else if (name === "identityProof") {
      setIdentityProof(file);
    } else if (name === "foodCertificate") {
      setFoodCetificate(file);
    }
  };

  console.log({ restaurantImage, identityProof, foodCertificate });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

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
          <FormContainer>
            <h1>Restaurant Details</h1>
            <Row>
              <FormControl>
                <Input
                  name="name"
                  title="Restaurant name"
                  value={values.name}
                  onChange={handleChange}
                  type="text"
                />
              </FormControl>
              <FormControl>
                <Input
                  name="subDetails"
                  title="Famous for"
                  value={values.subDetails}
                  onChange={handleChange}
                  type="text"
                />
              </FormControl>
              <FormControl>
                <Input
                  name="numberOfFoods"
                  title="Number of food products availabel"
                  value={values.numberOfFoods}
                  onChange={handleChange}
                  type="text"
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
                  name="minimumPriceOfFood"
                  title="Minimum price of food"
                  value={values.minimumPriceOfFood}
                  onChange={handleChange}
                  type="text"
                />
              </FormControl>
              <FormControl>
                <Input
                  name="dailyCustomers"
                  title="Number of daily customers"
                  value={values.dailyCustomers}
                  onChange={handleChange}
                  type="text"
                />
              </FormControl>
            </Row>
            <h1>Location and contact details</h1>
            <Row>
              <FormControl>
                <Input
                  name="city"
                  title="City in which restaurant located"
                  value={values.city}
                  onChange={handleChange}
                  type="text"
                />
              </FormControl>
              <FormControl>
                <Input
                  name="pinCode"
                  title="Pin code of city"
                  value={values.pinCode}
                  onChange={handleChange}
                  type="text"
                />
              </FormControl>
              <FormControl>
                <Input
                  name="contactNumber"
                  title="Restaurant contact number (if any)"
                  value={values.contactNumber}
                  onChange={handleChange}
                  type="text"
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
              <input type="checkbox" />
              <p>
                By clicking you are agreed our terms and condition of working
                with you.
              </p>
            </Agreement>
            <Button hover>
              <PostAddIcon />
              <span>Submit application</span>
            </Button>
          </FormContainer>
        </AddRestaurantContainer>
      </Container>
    </Wrapper>
  );
}
