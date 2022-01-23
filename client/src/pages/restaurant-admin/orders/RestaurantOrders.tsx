import React from "react";
import {
  SearchDiv,
  Table,
  TableBody,
  TableHead,
  TableWrapper,
  TD,
  TH,
  TR,
  Wrapper,
} from "./RestaurantOrders.styled";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

function RestaurantOrders() {
  return (
    <Wrapper>
      <SearchDiv>
        <div>
          <SearchIcon style={{ color: "hsl(0,0%,40%)" }} />
          <input type="text" placeholder="Search order" />
        </div>
      </SearchDiv>
      <TableWrapper>
        <Table>
          <TableHead>
            <TR>
              <TH>Order ID</TH>
              <TH>User Name</TH>
              <TH>Ordered Date</TH>
              <TH>Status</TH>
            </TR>
          </TableHead>
          <TableBody>
            <TR>
              <TD>
                <Link to="/admin/restaurant/orders/1">4589123664</Link>
              </TD>
              <TD>
                <p>Ritesh Khore</p>
              </TD>
              <TD>
                <p>11/02/2022</p>
              </TD>
              <TD status="Pending">
                <small>Pending</small>
              </TD>
            </TR>
            <TR>
              <TD>
                <Link to="/admin/restaurant/orders/1">4589123664</Link>
              </TD>
              <TD>
                <p>Ritesh Khore</p>
              </TD>
              <TD>
                <p>11/02/2022</p>
              </TD>
              <TD status="Delivered">
                <small>Delivered</small>
              </TD>
            </TR>
          </TableBody>
        </Table>
      </TableWrapper>
    </Wrapper>
  );
}

export default RestaurantOrders;
