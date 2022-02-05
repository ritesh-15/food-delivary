import { Search } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Button from "../../styles/Button";
import Container from "../../styles/Container";
import {
  Order,
  OrderLeft,
  OrderRight,
  OrdersContainer,
  OrdersWrapper,
  SearchDiv,
  Table,
  TableBody,
  TableHead,
  TableWrapper,
  TD,
  TH,
  TR,
} from "./Orders.styled";

const Orders = () => {
  return (
    <Container>
      <OrdersContainer>
        <SearchDiv>
          <div>
            <Search style={{ color: "hsl(0,0%,40%)" }} />
            <input type="text" placeholder="Search order" />
          </div>
        </SearchDiv>
        <TableWrapper>
          <Table>
            <TableHead>
              <TR>
                <TH>Order ID</TH>
                <TH>Ordered Date</TH>
                <TH>Order status</TH>
                <TH>Payment status</TH>
              </TR>
            </TableHead>
            <TableBody>
              <TR>
                <TD>
                  <Link to="/order/4">4589123664</Link>
                </TD>
                <TD>
                  <p>11/02/2022</p>
                </TD>
                <TD status="Pending">
                  <small>Pending</small>
                </TD>
                <TD status="paid">
                  <small>Paid</small>
                </TD>
              </TR>
              <TR>
                <TD>
                  <Link to="/order/4">4589123664</Link>
                </TD>
                <TD>
                  <p>11/02/2022</p>
                </TD>
                <TD status="Pending">
                  <small>Pending</small>
                </TD>
                <TD status="paid">
                  <small>Paid</small>
                </TD>
              </TR>
            </TableBody>
          </Table>
        </TableWrapper>
      </OrdersContainer>
    </Container>
  );
};

export default Orders;
