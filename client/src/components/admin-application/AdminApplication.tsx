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
import { FC } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const AdminApplication: FC = () => {
  const [status, setStatus] = useState("Paid");

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
            <TR>
              <TD>
                <Link to="/admin/applications/4">13345698</Link>
              </TD>
              <TD>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
              </TD>
              <TD status={status}>
                <small>Pending</small>
              </TD>
              <TD>11/05/2002</TD>
            </TR>
            <TR>
              <TD>
                <a href="">13345698</a>
              </TD>
              <TD>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
              </TD>
              <TD status={status}>
                <small>Pending</small>
              </TD>
              <TD>11/05/2002</TD>
            </TR>
          </TableBody>
        </Table>
      </TableWrapper>
    </ApplicationContainer>
  );
};

export default AdminApplication;
