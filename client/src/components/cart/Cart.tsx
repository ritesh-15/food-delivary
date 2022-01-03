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

const Sidebar = () => {
  return (
    <Wrapper>
      <MainSidebar>
        <MainContainer>
          <Top>
            <h1>Your cart</h1>
            <Close style={{ cursor: "pointer", color: "hsl(0,0%,50%)" }} />
          </Top>
          <Products>
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
          </Products>
          <SubTotal>
            <div>
              <h1>Subtotal : </h1>
              <span>Rs 500</span>
            </div>
            <div>
              <Button>Clear cart</Button>
              <Button>Checkout</Button>
            </div>
          </SubTotal>
        </MainContainer>
      </MainSidebar>
    </Wrapper>
  );
};

export default Sidebar;
