import Container from "../../styles/Container";
import {
  OrderInfoContainer,
  OrderInformation,
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
import { useState } from "react";
import Button from "../../styles/Button";

const Iconstyle = {
  fontSize: "2.5rem",
  color: "hsl(24, 100%, 92%)",
};

const ActiveStyle = {
  fontSize: "2.5rem",
  color: "hsl(24, 94%, 52%)",
};

const OrderInfo = () => {
  const [status, setStatus] = useState<number>(2);

  return (
    <Container>
      <OrderInfoContainer>
        <Title>
          <h1>Hey, Thank your for placing order.</h1>
          <span>Your are viewng now live traking of your order</span>
        </Title>
        <Wrapper>
          <StatusContainer>
            <StatusDiv active={status >= 1}>
              <AssignmentTurnedIn
                style={status >= 1 ? ActiveStyle : Iconstyle}
              />
              <div></div>
              <p>Order placed</p>
            </StatusDiv>
            <StatusDiv active={status >= 2}>
              <CheckCircleOutline
                style={status >= 2 ? ActiveStyle : Iconstyle}
              />
              <div></div>
              <p>Order confirmed</p>
            </StatusDiv>
            <StatusDiv active={status >= 3}>
              <TakeoutDining style={status >= 3 ? ActiveStyle : Iconstyle} />
              <div></div>
              <p>Peeparing</p>
            </StatusDiv>
            <StatusDiv active={status >= 4}>
              <LocalShipping style={status >= 4 ? ActiveStyle : Iconstyle} />
              <div></div>
              <p>Out for delivary</p>
            </StatusDiv>
            <StatusDiv active={status >= 5}>
              <EmojiEmotions style={status >= 5 ? ActiveStyle : Iconstyle} />
              <div></div>
              <p>Delivered</p>
            </StatusDiv>
          </StatusContainer>
          <OrderInformation>
            <p>
              Order ID : <span>412657923</span>
            </p>
            <p>
              Estimated time for delivary : <span>30 min</span>
            </p>
            <p>
              Order status : <span>Order confirmed</span>
            </p>
            <Button>Cancel Order</Button>
          </OrderInformation>
        </Wrapper>
      </OrderInfoContainer>
    </Container>
  );
};

export default OrderInfo;
