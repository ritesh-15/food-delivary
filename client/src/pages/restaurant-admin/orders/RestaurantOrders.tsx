import React, { useEffect, useState } from "react";
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
import OrderApi from "../../../api/order-api";
import { OrderInterface } from "../../../interfaces/OrderInterface";
import moment from "moment";
import { useFetch, useSocket, useUser } from "../../../hooks";
import { DataLoader } from "../../../components";

function RestaurantOrders() {
  const socket = useSocket();
  const { user } = useUser();

  const [orders, setOrders] = useState<OrderInterface[]>([]);

  const { loading, data } = useFetch("/order/all-orders");

  useEffect(() => {
    socket?.on("new-order-created", (order: OrderInterface) => {
      setOrders([order, ...orders]);
    });

    return () => {
      socket?.off();
    };
  }, [socket, orders]);

  useEffect(() => {
    socket?.emit("join-restaurant", user?._id);
  }, [socket, user]);

  useEffect(() => {
    if (!data) return;
    setOrders(data.orders);
  }, [data]);

  return (
    <>
      {loading ? (
        <DataLoader />
      ) : (
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
                {orders.map((order) => (
                  <TR>
                    <TD>
                      <Link to={`/admin/restaurant/orders/${order.orderId}`}>
                        {order.orderId}
                      </Link>
                    </TD>
                    <TD>
                      <p>{order?.user.name}</p>
                    </TD>
                    <TD>
                      <p>{moment(order.createdAt).format("DD MMMM YYYY")}</p>
                    </TD>
                    <TD status={order.orderStatus}>
                      <small>{order.orderStatus}</small>
                    </TD>
                  </TR>
                ))}
              </TableBody>
            </Table>
          </TableWrapper>
        </Wrapper>
      )}
    </>
  );
}

export default RestaurantOrders;
