import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { useMessage, useUser, useSuccessModal } from "../../hooks";
import { Link, useNavigate } from "react-router-dom";
import OrderApi from "../../api/order-api";
import { clearCart } from "../../features/cart/cartSlice";

interface AddressInterface {
  cordinates: {
    lat: number;
    lng: number;
  };
  placeName: string;
  state: string;
  country: string;
  locality: string;
  pinCode: number;
  district: string;
  landmark: string;
  _id: string;
}

interface PaymentStateInterface {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

const PAY_ONLINE = "pay online";
const COD = "cash on delivary";

const METHODS = [PAY_ONLINE, COD];

export default function Checkout() {
  const { user } = useUser();
  const { setMessage } = useMessage();
  const { setSuccessModal } = useSuccessModal();
  const dispatch = useDispatch();

  const { totalPrice, products, restaurantId } = useSelector(
    (state: RootState) => state.cart
  );
  const navigate = useNavigate();

  const Razorpay = useRazorpay();

  // selected address state
  const [address, setAddress] = useState<AddressInterface | null>(null);

  const handlePayment = useCallback(
    async (callback: (payment: PaymentStateInterface) => void) => {
      let order;

      try {
        order = await OrderApi.makeOrder(totalPrice);
      } catch (error) {
        return setMessage("Something went wrong!", true);
      }

      if (!order) return setMessage("Something went wrong!", true);

      const options: RazorpayOptions = {
        key: process.env.REACT_APP_RAZORPAY_KEY || "",
        amount: order.data.order.amount,
        currency: "INR",
        name: "Foodies",
        description: "Payment",
        order_id: order.data.order.id,
        handler: (res: PaymentStateInterface) => {
          callback(res);
        },
        prefill: {
          name: user ? user.name : "",
          email: user ? user.email : "",
          contact: user ? user.number : "",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#528FF0",
        },
      };

      const rzpay = new Razorpay(options);

      rzpay.on("payment.failed", (error: any) => {
        setMessage("Payment has been failed please try again!", true);
      });

      rzpay.open();
    },
    [Razorpay]
  );

  const handleClick = async () => {
    if (!user) {
      setMessage("Please login to continue!", true);
      navigate("/login");
      return;
    }

    if (totalPrice <= 0) {
      return setMessage("Please add some items to cart!", true);
    }

    if (!address) {
      setMessage("Please select address to continue!", true);
      return;
    }

    if (!paymentMethod) {
      setMessage("Please select payment method to continue!", true);
      return;
    }

    if (paymentMethod === PAY_ONLINE) {
      const callback = async (payment: PaymentStateInterface) => {
        const body = {
          products,
          addressDetails: address,
          paymentDetails: {
            razorpayOrderId: payment.razorpay_order_id,
            razorpayPaymentId: payment.razorpay_payment_id,
            razorpaySignature: payment.razorpay_signature,
            amount: totalPrice,
            paidAt: new Date().toISOString(),
            mode: "online",
            paymentStatus: "paid",
          },
          restaurant: restaurantId,
        };

        try {
          const { data } = await OrderApi.newOrder(body);
          if (data.ok) {
            setSuccessModal(
              "Order Placed Successfully",
              true,
              "Your order has been placed successfully. You will be notified once the order is confirmed by the restaurant.",
              () => {
                navigate("/orders");
              }
            );
            dispatch(clearCart());
          }
        } catch (error) {
          setMessage("Something went wrong!", true);
        }
      };

      await handlePayment(callback);

      return;
    }

    const body = {
      products,
      addressDetails: address,
      paymentDetails: {
        razorpayOrderId: "NA",
        razorpayPaymentId: "NA",
        razorpaySignature: "NA",
        amount: totalPrice,
        paidAt: new Date().toISOString(),
        mode: "cod",
        paymentStatus: "unpaid",
      },
      restaurant: restaurantId,
    };

    try {
      const { data } = await OrderApi.newOrder(body);
      if (data.ok) {
        setSuccessModal(
          "Order Placed Successfully",
          true,
          "Your order has been placed successfully. You will be notified once the order is confirmed by the restaurant.",
          () => {
            navigate("/orders");
          }
        );
        dispatch(clearCart());
      }
    } catch (error) {
      setMessage("Something went wrong!", true);
    }
  };

  const [paymentMethod, setPaymentMethod] = useState<string>(PAY_ONLINE);

  return (
    <Wrapper>
      <Container>
        <CheckoutContainer>
          <CheckoutDetails>
            <DelivaryAddress>
              <h1>Delivary address</h1>

              {user && user.addresses.length > 0 ? (
                user.addresses.map((address) => (
                  <Address>
                    <input
                      onClick={() => setAddress(address)}
                      type="radio"
                      name="address"
                    />
                    <p>{address.placeName}</p>
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
              <Button onClick={handleClick}>Confirm and place order</Button>
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
          </Subtotal>
        </CheckoutContainer>
      </Container>
    </Wrapper>
  );
}
