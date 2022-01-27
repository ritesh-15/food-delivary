import {
  Actions,
  ActionSelectBox,
  FormControl,
  Grid,
  HeadingContainer,
  Image,
  MainContainer,
  MapContainer,
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
import { useEffect, useState } from "react";
import Button from "../../../styles/Button";
import { Map, SelectBox, ViewDocument } from "../../../components";
import { ApplicationInterface } from "../../../interfaces/ApplicationInterface";
import { Params, useNavigate, useParams } from "react-router-dom";
import {
  deleteApplicationApi,
  getApplication,
  updateApplicationStatusApi,
} from "../../../api/applicationApi";
import moment from "moment";
import { useFetchLoading } from "../../../hooks";
import DeleteIcon from "@mui/icons-material/Delete";

// status change options
const OPTIONS = ["accepted", "rejected"];

const AdminSingleApplication = () => {
  // hooks
  const { id }: Readonly<Params<string>> = useParams();
  const { setIsLoading } = useFetchLoading();
  const navigate = useNavigate();

  // application state
  const [application, setApplication] = useState<ApplicationInterface>();

  // application status state
  const [status, setStatus] = useState("Accepted");

  //get application data
  useEffect(() => {
    if (!id) return;

    setIsLoading(true);
    const getApplicationDetails = async () => {
      try {
        const { data } = await getApplication(id);
        if (data.ok) {
          setApplication(data.application);
          setStatus(data.application.status);
        }
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    getApplicationDetails();
  }, [id]);

  // update application status
  const updateApplicationStatus = async () => {
    if (!id) return;
    setIsLoading(true);
    try {
      const { data } = await updateApplicationStatusApi(id, { status });
      if (data.ok) {
        setApplication(data.application);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  // delete application
  const deleteApplication = async () => {
    if (!id) return;
    setIsLoading(true);
    try {
      await deleteApplicationApi(id);
      setIsLoading(false);
      navigate("/admin/applications");
    } catch (error) {
      setIsLoading(false);
    }
  };

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
            <h1>Application Name</h1>
            <p>{application?.userId.name} </p>
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
            <h1>Applicant Contact Number</h1>
            <p>{application?.userId.number}</p>
          </FormControl>
        </Grid>
        <SubTitle>Restaurant Details</SubTitle>
        <Grid>
          <FormControl>
            <h1>Restaurnt Name</h1>
            <p>{application?.restaurantInfo.name}</p>
          </FormControl>
          <FormControl>
            <h1>Famous For </h1>
            <p>{application?.restaurantInfo.famousFor}</p>
          </FormControl>
          <FormControl>
            <h1>Restaurant Email Address</h1>
            <p>{application?.restaurantInfo.email}</p>
          </FormControl>
          <FormControl>
            <h1>Restaurant Contact Number</h1>
            <p>{application?.restaurantInfo.number}</p>
          </FormControl>
          <FormControl>
            <h1>Number of food products</h1>
            <p>{application?.restaurantInfo.numberOfFoodProducts}</p>
          </FormControl>
          <FormControl>
            <h1>Food type</h1>
            <p>{application?.restaurantInfo.foodType}</p>
          </FormControl>
          <FormControl>
            <h1>Minimum food price</h1>
            <p>RS {application?.restaurantInfo.minimumFoodPrice}</p>
          </FormControl>
          <FormControl>
            <h1>Number of daily customers</h1>
            <p>{application?.restaurantInfo.numberOfDailyCustomers}</p>
          </FormControl>
        </Grid>

        <SubTitle>Location and contact details</SubTitle>
        <MapContainer>
          {application && (
            <Map
              currentCordinates={[
                application?.addressInfo.cordinates.lat,
                application?.addressInfo.cordinates.lng,
              ]}
            />
          )}
        </MapContainer>
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
            <h1>Locality</h1>
            <p>{application?.addressInfo.locality}</p>
          </FormControl>
          <FormControl>
            <h1>Pincode</h1>
            <p>{application?.addressInfo.pinCode}</p>
          </FormControl>
          <FormControl>
            <h1>Place name</h1>
            <p>{application?.addressInfo.placeName}</p>
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
      {application?.status !== "accepted" && (
        <ActionSelectBox>
          <SelectBox
            label="Select action"
            options={OPTIONS}
            current={status}
            changeCurrent={setStatus}
          />
          <Button hover onClick={updateApplicationStatus}>
            Save
          </Button>
        </ActionSelectBox>
      )}
      <Actions>
        <Button hover onClick={deleteApplication}>
          <DeleteIcon />
          <span>Delete Application</span>
        </Button>
      </Actions>
    </Wrapper>
  );
};

export default AdminSingleApplication;
