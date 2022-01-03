import Button from "../../styles/Button";
import {
  Product,
  ProductImage,
  ProductInfo,
  ProductMainInfo,
  ProductSubDetails,
} from "./CartProduct.styled";

const CartProduct = () => {
  return (
    <Product>
      <ProductImage>
        <img
          src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </ProductImage>
      <ProductInfo>
        <ProductMainInfo>
          <h1>Special pav bhaji</h1>
          <p>Rs 401</p>
          <div>
            <Button>-</Button>
            <span>1</span>
            <Button>+</Button>
          </div>
        </ProductMainInfo>
        <ProductSubDetails>
          <div>
            <span></span>
          </div>
        </ProductSubDetails>
      </ProductInfo>
    </Product>
  );
};

export default CartProduct;
