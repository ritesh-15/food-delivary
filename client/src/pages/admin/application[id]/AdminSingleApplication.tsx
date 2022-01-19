import Button from "../../../styles/Button";
import {
  Actions,
  FormControl,
  Grid,
  HeadingContainer,
  Image,
  MainContainer,
  SubTitle,
  Title,
  Wrapper,
} from "./AdminSingleApplication.styled";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { CheckCircle, Cancel } from "@mui/icons-material";
import { useState } from "react";

const AdminSingleApplication = () => {
  const [status, setStatus] = useState("Accepted");

  return (
    <Wrapper>
      <HeadingContainer>
        <Image>
          <img
            src="https://images.unsplash.com/photo-1642420805609-157d2f1a7f1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </Image>
        <Title status={status}>
          <h1>PK Biryani House</h1>
          <p>Biryani, Maharashtrian, Malwani, Mughlai</p>
          <span>Swargate, Pune</span>
          <small>Accepted</small>
        </Title>
      </HeadingContainer>
      <MainContainer>
        <SubTitle>Application Details</SubTitle>
        <Grid>
          <FormControl>
            <h1>Application ID</h1>
            <p>4789561236</p>
          </FormControl>
          <FormControl>
            <h1>Application Date</h1>
            <p>11-02-2003</p>
          </FormControl>
        </Grid>
        <SubTitle>Applicant Details</SubTitle>
        <Grid>
          <FormControl>
            <h1>Application Name</h1>
            <p>Khore Ritesh Pradip </p>
          </FormControl>
          <FormControl>
            <h1>Applicant ID</h1>
            <p>4789561236</p>
          </FormControl>
          <FormControl>
            <h1>Applicant Email Address</h1>
            <p>riteshkhore@gmail.com</p>
          </FormControl>
          <FormControl>
            <h1>Applicant Identification Proof</h1>
            <div>
              <RemoveRedEyeIcon style={{ color: "hsl(0,0%,50%)" }} />
              <p>View</p>
            </div>
          </FormControl>
        </Grid>
        <SubTitle>Restaurant Details</SubTitle>
        <Grid>
          <FormControl>
            <h1>Restaurnt Name</h1>
            <p>Hotel Kaushalya</p>
          </FormControl>
          <FormControl>
            <h1>Famous For </h1>
            <p>Pav bhaji</p>
          </FormControl>
          <FormControl>
            <h1>Applicant Email Address</h1>
            <p>4789561236</p>
          </FormControl>
          <FormControl>
            <h1>Number of food products</h1>
            <p>150</p>
          </FormControl>
          <FormControl>
            <h1>Food type</h1>
            <p>Vegeterain and non vegeterian</p>
          </FormControl>
          <FormControl>
            <h1>Minimum food price</h1>
            <p>RS 450</p>
          </FormControl>
          <FormControl>
            <h1>Number of daily customers</h1>
            <p>40</p>
          </FormControl>
        </Grid>

        <SubTitle>Location and contact details</SubTitle>
        <Grid>
          <FormControl>
            <h1>Located in</h1>
            <p>Baramati</p>
          </FormControl>
          <FormControl>
            <h1>Pin code</h1>
            <p>412204</p>
          </FormControl>
          <FormControl>
            <h1>Contact Number</h1>
            <p>9960130524</p>
          </FormControl>
        </Grid>
      </MainContainer>
      <Actions>
        <Button hover>
          <CheckCircle />
          <span>Accept</span>
        </Button>
        <Button>
          <Cancel />
          <span>Reject</span>
        </Button>
      </Actions>
    </Wrapper>
  );
};

export default AdminSingleApplication;
