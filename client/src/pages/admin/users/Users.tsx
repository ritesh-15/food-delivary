import React from "react";
import { Link } from "react-router-dom";
import {
  SearchDiv,
  Table,
  TableBody,
  TableHead,
  TD,
  TH,
  TR,
  Wrapper,
} from "./Users.styled";
import SearchIcon from "@mui/icons-material/Search";

const Users = () => {
  return (
    <Wrapper>
      <SearchDiv>
        <div>
          <SearchIcon style={{ color: "hsl(0,0%,40%)" }} />
          <input type="text" placeholder="Search user" />
        </div>
      </SearchDiv>
      <Table>
        <TableHead>
          <TR>
            <TH>User ID</TH>
            <TH>User Name</TH>
            <TH>Status</TH>
            <TH>Joined Date</TH>
          </TR>
        </TableHead>
        <TableBody>
          <TR>
            <TD>
              <Link to="/admin/restaurants/4">4589123664</Link>
            </TD>
            <TD>
              <p>Ritesh Khore</p>
            </TD>
            <TD>
              <small>Active</small>
            </TD>
            <TD>11/05/2002</TD>
          </TR>
          <TR>
            <TD>
              <Link to="/admin/restaurants/4">4589123664</Link>
            </TD>
            <TD>
              <p>Ritesh Khore</p>
            </TD>
            <TD>
              <small>Active</small>
            </TD>
            <TD>11/05/2002</TD>
          </TR>
          <TR>
            <TD>
              <Link to="/admin/restaurants/4">4589123664</Link>
            </TD>
            <TD>
              <p>Ritesh Khore</p>
            </TD>
            <TD status="Block">
              <small>Block</small>
            </TD>
            <TD>11/05/2002</TD>
          </TR>
        </TableBody>
      </Table>
    </Wrapper>
  );
};

export default Users;
