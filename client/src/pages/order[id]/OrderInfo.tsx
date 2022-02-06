import Container from "../../styles/Container";
import {
  OrderInfoContainer,
  OrderInformation,
  OrderTitle,
  StatusContainer,
  StatusDiv,
  Title,
  Wrapper,
} from "./OrderInfo.styled";
import {
  AssignmentTurnedIn,
  CheckCircleOutline,
  TakeoutDining,
  LocalShipping,
  EmojiEmotions,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import Button from "../../styles/Button";
import { useParams } from "react-router-dom";
import OrderApi from "../../api/order-api";
import { OrderInterface } from "../../interfaces/OrderInterface";
import styled from "styled-components";
import { useMessage, useSocket } from "../../hooks";

const Iconstyle = {
  fontSize: "2.5rem",
  color: "#dedede",
};

const ActiveStyle = {
  fontSize: "2.5rem",
  color: "#229941",
};

const OrderInfo = () => {
  const { id: orderId } = useParams();
  const socket = useSocket();
  const { setMessage } = useMessage();

  useEffect(() => {
    if (!orderId) return;

    socket?.emit("order-room", orderId);
  }, [socket, orderId]);

  // order state
  const [order, setOrder] = useState<OrderInterface>();

  useEffect(() => {
    socket?.on("order-updated", (order: OrderInterface) => {
      setOrder(order);
      setStatus(order.orderStatus);
      setMessage("Order status changed!");
    });

    return () => {
      socket?.off();
    };
  }, [socket]);

  // order status
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    if (!orderId) return;

    (async () => {
      try {
        const { data } = await OrderApi.singleOrder(orderId);
        if (data.ok) {
          setOrder(data.order);
          setStatus(data.order.orderStatus);
        }
      } catch (error) {}
    })();
  }, [orderId]);

  return (
    <Container>
      <OrderInfoContainer>
        <Title>
          <h1>Hey, Thank your for placing order.</h1>
          <span>Your are viewng now live traking of your order</span>
        </Title>
        <Wrapper>
          <StatusContainer>
            <StatusDiv active={status === "placed"}>
              <AssignmentTurnedIn
                style={status === "placed" ? ActiveStyle : Iconstyle}
              />
              <div></div>
              <p>Order placed</p>
            </StatusDiv>
            <StatusDiv active={status === "confirmed"}>
              <CheckCircleOutline
                style={status === "confirmed" ? ActiveStyle : Iconstyle}
              />
              <div></div>
              <p>Order confirmed</p>
            </StatusDiv>
            <StatusDiv active={status === "preparing"}>
              <TakeoutDining
                style={status === "preparing" ? ActiveStyle : Iconstyle}
              />
              <div></div>
              <p>Peeparing</p>
            </StatusDiv>
            <StatusDiv active={status === "out for delivary"}>
              <LocalShipping
                style={status === "out for delivary" ? ActiveStyle : Iconstyle}
              />
              <div></div>
              <p>Out for delivary</p>
            </StatusDiv>
            <StatusDiv active={status === "delivared"}>
              <EmojiEmotions
                style={status === "delivared" ? ActiveStyle : Iconstyle}
              />
              <div></div>
              <p>Delivered</p>
            </StatusDiv>
          </StatusContainer>
          <OrderInformation>
            <OrderTitle>
              <h1>Order ID :</h1>
              <p>{order?.orderId}</p>
            </OrderTitle>
            <OrderTitle>
              <h1>Order Status :</h1>
              <p>{order?.orderStatus}</p>
            </OrderTitle>
            <OrderTitle>
              <h1>Phone number:</h1>
              <p>{order?.user.number}</p>
            </OrderTitle>
            <OrderTitle>
              <h1>Delivary address:</h1>
              <p>
                {order?.addressDetails.pinCode}
                {" " + order?.addressDetails.placeName}
              </p>
            </OrderTitle>
            <OrderTitle>
              <h1>Payment status:</h1>
              <p>{order?.paymentDetails.paymentStatus}</p>
            </OrderTitle>
            <OrderTitle>
              <h1>Total payment:</h1>
              <p>Rs {order?.paymentDetails.amount}</p>
            </OrderTitle>
            <Button>Cancel order</Button>
          </OrderInformation>
        </Wrapper>
      </OrderInfoContainer>
    </Container>
  );
};

export default OrderInfo;
