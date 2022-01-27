import {
  Actions,
  ActionSelectBox,
  FormControl,
  Grid,
  HeadingContainer,
  Image,
  MainContainer,
  MapContainer,
  RejectionForm,
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
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import Button from "../../../styles/Button";
import { Input, Map, SelectBox, ViewDocument } from "../../../components";
import { ApplicationInterface } from "../../../interfaces/ApplicationInterface";
import { Params, useNavigate, useParams } from "react-router-dom";
import {
  deleteApplicationApi,
  getApplication,
  updateApplicationApi,
  updateApplicationStatusApi,
} from "../../../api/applicationApi";
import moment from "moment";
import { useFetchLoading, useForm } from "../../../hooks";
import DeleteIcon from "@mui/icons-material/Delete";
import { rejectionFormValidation } from "../../../validations/application";

// status change options
const OPTIONS = ["accepted", "rejected"];

interface CurrentfileInterface {
  src: string;
  fileType: string;
  title: string;
}

// rejection form interface
interface RejectionFormInterface {
  reason: string;
  message: string;
}

const AdminSingleApplication = () => {
  // hooks
  const { id }: Readonly<Params<string>> = useParams();
  const { setIsLoading } = useFetchLoading();
  const navigate = useNavigate();

  // application state
  const [application, setApplication] = useState<ApplicationInterface>();

  // rejection form initial state
  const [initialState, setInitialState] = useState<RejectionFormInterface>({
    reason: "",
    message: "",
  });

  // handle change for rejction form
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInitialState({ ...initialState, [name]: value });
  };

  // view document state
  const [currentFile, setCurrentFile] = useState<CurrentfileInterface>();

  // application status state
  const [status, setStatus] = useState("pending");

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
          setInitialState({
            reason: data.application.rejectionDetails.reason,
            message: data.application.rejectionDetails.message,
          });
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
      const { data } = await updateApplicationStatusApi(id, {
        status,
        rejectionDetails: { ...initialState },
      });
      if (data.ok) {
        setApplication(data.application);
      }
      setIsLoading(false);
    } catch (error) {
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
      {currentFile && (
        <ViewDocument state={currentFile} changeState={setCurrentFile} />
      )}
      <HeadingContainer>
        <Image>
          <img src={application?.images[0].url} alt="" />
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
        {application && (
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
                    onClick={() =>
                      setCurrentFile({
                        src: application?.documents.applicantProof.url,
                        fileType:
                          application?.documents.applicantProof.fileType,
                        title: "Applicant Identity Proof",
                      })
                    }
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
                    onClick={() =>
                      setCurrentFile({
                        src: application?.documents.foodAuthorityCertificate
                          .url,
                        fileType:
                          application?.documents.foodAuthorityCertificate
                            .fileType,
                        title: "Food authority certificate",
                      })
                    }
                  />
                </TD>
              </TR>
            </TableBody>
          </Table>
        )}
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
      {status === "rejected" && (
        <RejectionForm>
          <Input
            title="Reason of rejction"
            value={initialState.reason}
            onChange={handleChange}
            name="reason"
            type="text"
          />
          <Input
            title="Message"
            value={initialState.message}
            onChange={handleChange}
            name="message"
            type="text"
          />
        </RejectionForm>
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
