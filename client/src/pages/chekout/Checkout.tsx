import { useState } from "react";
import { SelectBox } from "../../components";
import Button from "../../styles/Button";
import Container from "../../styles/Container";
import Flex from "../../styles/Flex";
import {
  Address,
  CheckoutContainer,
  CheckoutDetails,
  DelivaryAddress,
  Method,
  PaymentMethod,
  Subtotal,
  Wrapper,
} from "./Checkout.styled";

const METHODS = ["Pay online", "Pay on delivary"];

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("");

  return (
    <Wrapper>
      <Container>
        <CheckoutContainer>
          <CheckoutDetails>
            <DelivaryAddress>
              <h1>Delivary address</h1>
              <Flex justify="flex-start">
                <Address>
                  <p>
                    11, Mahatma Jyotiba Phule, Shop No.235/36/37, Fruit Market
                    Rd, Mandai, Shukrawar Peth, Pune, Maharashtra 411002, India
                  </p>
                </Address>
              </Flex>
            </DelivaryAddress>
            <PaymentMethod>
              <h1>Payment method</h1>
              <Method>
                <SelectBox
                  options={METHODS}
                  label="Choose payment method"
                  changeCurrent={setPaymentMethod}
                  current={paymentMethod}
                />
              </Method>
            </PaymentMethod>
          </CheckoutDetails>
          <Subtotal>
            <h1>Bill details</h1>
            <div>
              <Flex>
                <p>Item total</p>
                <span>Rs 450</span>
              </Flex>
            </div>
            <div>
              <Flex>
                <p>Taxes</p>
                <span>Rs 450</span>
              </Flex>
            </div>
            <div>
              <Flex>
                <h2>To pay</h2>
                <small>Rs 450</small>
              </Flex>
            </div>
          </Subtotal>
        </CheckoutContainer>
      </Container>
    </Wrapper>
  );
}
