import {
  EmptyCartContainer,
  MainContainer,
  MainSidebar,
  Products,
  SubTotal,
  Top,
  Wrapper,
} from "./Cart.styled";
import { Close } from "@mui/icons-material";
import { CartProduct } from "..";
import Button from "../../styles/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setOpen } from "../../features/cart-sidebar/cartSidebarSlice";
import { clearCart } from "../../features/cart/cartSlice";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const dispatch = useDispatch();

  // hooks
  const { products, totalPrice } = useSelector(
    (state: RootState) => state.cart
  );

  console.log(products);

  return (
    <Wrapper>
      <MainSidebar>
        <MainContainer>
          <Top>
            <h1>Your cart</h1>
            <Close
              onClick={() => dispatch(setOpen(false))}
              style={{ cursor: "pointer", color: "hsl(0,0%,50%)" }}
            />
          </Top>
          {products.length === 0 ? (
            <EmptyCartContainer>
              <img src="/images/empty-cart.svg" alt="" />
              <h1>Oops your cart is empty!</h1>
            </EmptyCartContainer>
          ) : (
            <>
              <Products>
                {products.map(({ product, quantity }) => (
                  <CartProduct product={product} quantity={quantity} />
                ))}
              </Products>
              <SubTotal>
                <div>
                  <h1>Subtotal : </h1>
                  <span>Rs {totalPrice}</span>
                </div>

                <Link to="/checkout">
                  <Button hover>Procced To Checkout</Button>
                </Link>
              </SubTotal>
            </>
          )}
        </MainContainer>
      </MainSidebar>
    </Wrapper>
  );
};

export default Sidebar;
