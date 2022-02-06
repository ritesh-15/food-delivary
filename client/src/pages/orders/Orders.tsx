import { Search } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OrderApi from "../../api/order-api";
import { OrderInterface } from "../../interfaces/OrderInterface";
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
import moment from "moment";

const Orders = () => {
  const [orders, setOrders] = useState<OrderInterface[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await OrderApi.getUserOrders();
        if (data.ok) {
          setOrders(data.orders);
        }
      } catch (error) {}
    })();
  }, []);

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
              {orders.map(
                ({ orderId, orderStatus, createdAt, paymentDetails }) => (
                  <TR key={orderId}>
                    <TD>
                      <Link to={`/order/${orderId}`}>{orderId}</Link>
                    </TD>
                    <TD>
                      <p>{moment(createdAt).format("DD MMMM YYYY")}</p>
                    </TD>
                    <TD>
                      <p>{orderStatus}</p>
                    </TD>
                    <TD status={paymentDetails.paymentStatus}>
                      <small>{paymentDetails.paymentStatus}</small>
                    </TD>
                  </TR>
                )
              )}
            </TableBody>
          </Table>
        </TableWrapper>
      </OrdersContainer>
    </Container>
  );
};

export default Orders;
