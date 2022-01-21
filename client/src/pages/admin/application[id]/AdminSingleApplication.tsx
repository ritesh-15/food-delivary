import {
  Actions,
  FormControl,
  Grid,
  HeadingContainer,
  Image,
  MainContainer,
  SubTitle,
  Table,
  TableBody,
  TableHead,
  TD,
  TH,
  Title,
  TR,
  Wrapper,
} from "./AdminSingleApplication.styled";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useState } from "react";
import Button from "../../../styles/Button";
import { ViewDocument } from "../../../components";

const AdminSingleApplication = () => {
  const [status, setStatus] = useState("Accepted");

  return (
    <Wrapper>
      {/* <ViewDocument
        src="/acknowledgementSlip.pdf"
        fileType="pdf"
        title="Food certificate"
      /> */}
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
        <Button hover>Accept</Button>
        <Button>Reject</Button>
      </Actions>
    </Wrapper>
  );
};

export default AdminSingleApplication;