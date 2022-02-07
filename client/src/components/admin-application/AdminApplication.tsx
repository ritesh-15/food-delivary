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
import { ApplicationInterface } from "../../interfaces/ApplicationInterface";
import moment from "moment";
import { useFetch, useMessage, useSocket } from "../../hooks";
import { DataLoader } from "..";

const AdminApplication: FC = () => {
  const socket = useSocket();

  useEffect(() => {
    socket?.emit("join-admin");
  }, [socket]);

  // applications
  const [applications, setApplications] = useState<ApplicationInterface[]>([]);

  useEffect(() => {
    socket?.on(
      "new-restaurant-application",
      (application: ApplicationInterface) => {
        setApplications([application, ...applications]);
      }
    );

    return () => {
      socket?.off();
    };
  }, [socket, applications]);

  const { loading, data } = useFetch("/applications");

  useEffect(() => {
    if (!data) return;

    setApplications(data.applications);
  }, [data]);

  return (
    <>
      {loading ? (
        <DataLoader />
      ) : (
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
                    <TD>
                      {moment(application.createdAt).format("DD MMMM YYYY")}
                    </TD>
                  </TR>
                ))}
              </TableBody>
            </Table>
          </TableWrapper>
        </ApplicationContainer>
      )}
    </>
  );
};

export default AdminApplication;
