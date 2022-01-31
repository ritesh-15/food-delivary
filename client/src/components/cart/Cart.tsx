import {
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

const Sidebar = () => {
  const dispatch = useDispatch();

  // hooks
  const { products, totalPrice } = useSelector(
    (state: RootState) => state.cart
  );

  function clearAllItems() {
    dispatch(clearCart());
  }

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
          <Products>
            {products.map((product) => (
              <CartProduct
                product={product.product}
                quantity={product.quantity}
              />
            ))}
          </Products>
          <SubTotal>
            <div>
              <h1>Subtotal : </h1>
              <span>Rs {totalPrice}</span>
            </div>
            <div>
              <Button onClick={clearAllItems}>Clear cart</Button>
              <Button>Checkout</Button>
            </div>
          </SubTotal>
        </MainContainer>
      </MainSidebar>
    </Wrapper>
  );
};

export default Sidebar;
