import { FC } from "react";
import { useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
} from "../../features/cart/cartSlice";
import { ProductInterface } from "../../interfaces/ProductInterface";
import Button from "../../styles/Button";
import {
  Product,
  ProductImage,
  ProductInfo,
  ProductMainInfo,
  ProductSubDetails,
} from "./CartProduct.styled";

interface Props {
  product: ProductInterface;
  quantity: number;
}

const CartProduct: FC<Props> = ({ product, quantity }) => {
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(incrementQuantity(product._id));
  };

  const decrement = () => {
    dispatch(decrementQuantity(product._id));
  };

  return (
    <Product>
      <ProductImage>
        <img src={product.image.url} alt="" />
      </ProductImage>
      <ProductInfo>
        <ProductMainInfo>
          <h1>{product.name}</h1>
          <p>Rs {product.price}</p>
          <div>
            <Button onClick={decrement}>-</Button>
            <span>{quantity}</span>
            <Button onClick={increment}>+</Button>
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
