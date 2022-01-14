import Button from "../../styles/Button";
import Container from "../../styles/Container";
import {
  Order,
  OrderLeft,
  OrderRight,
  OrdersContainer,
  OrdersWrapper,
} from "./Orders.styled";

const Orders = () => {
  return (
    <Container>
      <OrdersContainer>
        <OrdersWrapper>
          <Order>
            <OrderLeft>
              <h1>
                Order ID <span>4125468325</span>
              </h1>
              <p>
                11, Mahatma Jyotiba Phule, Shop No.235/36/37, Fruit Market Rd,
                Mandai, Shukrawar Peth, Pune, Maharashtra 411002, India
              </p>
            </OrderLeft>
            <OrderRight>
              <p>
                Total Payment : <span>Rs 451</span>
              </p>
              <p>
                Payment Status : <span>Paid</span>
              </p>
              <p>
                Order Status : <span>Order placed</span>
              </p>{" "}
              <Button>View</Button>
            </OrderRight>
          </Order>
          <Order>
            <OrderLeft>
              <h1>
                Order ID <span>4125468325</span>
              </h1>
              <p>
                11, Mahatma Jyotiba Phule, Shop No.235/36/37, Fruit Market Rd,
                Mandai, Shukrawar Peth, Pune, Maharashtra 411002, India
              </p>
            </OrderLeft>
            <OrderRight>
              <p>
                Total Payment : <span>Rs 451</span>
              </p>
              <p>
                Payment Status : <span>Paid</span>
              </p>
              <p>
                Order Status : <span>Order placed</span>
              </p>
              <Button>View</Button>
            </OrderRight>
          </Order>
        </OrdersWrapper>
      </OrdersContainer>
    </Container>
  );
};

export default Orders;
