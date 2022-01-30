import {
  ApplicationContainer,
  SearchDiv,
  Table,
  TableBody,
  TableHead,
  TableWrapper,
  TD,
  TH,
  TR,
} from "./AdminApplication.styled";
import { FC, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { getAllApplicationApi } from "../../api/applicationApi";
import { ApplicationInterface } from "../../interfaces/ApplicationInterface";
import moment from "moment";
import { useFetchLoading, useMessage } from "../../hooks";

const AdminApplication: FC = () => {
  const { setMessage } = useMessage();
  const { setIsLoading } = useFetchLoading();

  // applications
  const [applications, setApplications] = useState<ApplicationInterface[]>([]);

  // get all application
  useEffect(() => {
    const getAllApplications = async () => {
      setIsLoading(true);
      try {
        const { data } = await getAllApplicationApi();
        if (data.ok) {
          setApplications(data.applications);
        }
        setIsLoading(false);
      } catch (error) {
        setMessage("Something went wrong!");
        setIsLoading(false);
      }
    };

    getAllApplications();
  }, []);

  return (
    <ApplicationContainer>
      <SearchDiv>
        <div>
          <SearchIcon style={{ color: "hsl(0,0%,40%)" }} />
          <input type="text" placeholder="Search application" />
        </div>
      </SearchDiv>
      <TableWrapper>
        <Table>
          <TableHead>
            <TR>
              <TH>Application ID</TH>
              <TH>Restaurant Name</TH>
              <TH>Application Status</TH>
              <TH>Application Date</TH>
            </TR>
          </TableHead>
          <TableBody>
            {applications.map((application) => (
              <TR>
                <TD>
                  <Link to={`/admin/applications/${application._id}`}>
                    {application._id}
                  </Link>
                </TD>
                <TD>
                  <p>{application.restaurantInfo.name}</p>
                </TD>
                <TD status={application.status}>
                  <small>{application.status}</small>
                </TD>
                <TD>{moment(application.createdAt).format("DD MMMM YYYY")}</TD>
              </TR>
            ))}
          </TableBody>
        </Table>
      </TableWrapper>
    </ApplicationContainer>
  );
};

export default AdminApplication;
