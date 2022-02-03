import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { SelectBox } from "../../components";
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
import useRazorpay, { RazorpayOptions } from "react-razorpay";
import Button from "../../styles/Button";
import axios from "axios";
import { api } from "../../api/axios";
import { useUser } from "../../hooks";
import { Link } from "react-router-dom";

const METHODS = ["Pay online", "Pay on delivary"];

export default function Checkout() {
  const { user } = useUser();

  const Razorpay = useRazorpay();

  const handlePayment = useCallback(async () => {
    const res = await api.post("/new-order");

    const options: RazorpayOptions = {
      key: "rzp_test_jihiG2CSuWt9Vl",
      amount: res.data.order.amount,
      currency: "INR",
      name: "Foodies",
      description: "Test Transaction",
      order_id: res.data.order.id,
      handler: (res) => {
        console.log(res);
      },
      prefill: {
        name: "Omkar jarad",
        email: "riteshkhore@gmail.com",
        contact: "9373953501",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "hsl(27, 97%, 54%)",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.on("payment.failed", (error: any) => {
      console.log(error);
    });

    rzpay.open();
  }, [Razorpay]);

  const [paymentMethod, setPaymentMethod] = useState("");
  const { totalPrice } = useSelector((state: RootState) => state.cart);

  return (
    <Wrapper>
      <Container>
        <CheckoutContainer>
          <CheckoutDetails>
            <DelivaryAddress>
              <h1>Delivary address</h1>

              {user && user.addresses.length > 2 ? (
                user.addresses.map((address) => (
                  <Address>
                    <input type="radio" name="address" />
                    {/* <p>{address.placeName}</p> */}
                  </Address>
                ))
              ) : (
                <Link to="/account">
                  <Button>Add address</Button>
                </Link>
              )}
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
                <span>Rs {totalPrice}</span>
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
                <small>Rs {totalPrice}</small>
              </Flex>
            </div>
            <Button onClick={handlePayment} hover>
              Procced to pay
            </Button>
          </Subtotal>
        </CheckoutContainer>
      </Container>
    </Wrapper>
  );
}
