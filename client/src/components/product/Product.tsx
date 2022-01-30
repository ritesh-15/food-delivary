import { FC } from "react";
import Button from "../../styles/Button";
import { ProductContainer, ProductImage, ProductInfo } from "./Product.styled";
import AddIcon from "@mui/icons-material/Add";
import Flex from "../../styles/Flex";
import { ProductInterface } from "../../interfaces/ProductInterface";

interface Props {
  product: ProductInterface;
}

const Product: FC<Props> = ({ product }) => {
  return (
    <ProductContainer>
      <ProductImage>
        <img src={product.image.url} alt="" />
      </ProductImage>
      <ProductInfo type={product.type}>
        <div>
          <h1>{product.name}</h1>
          <div>
            <span></span>
          </div>
        </div>
        <small>{product.description}</small>
        <p>Rs {product.price}</p>
        <Button>
          <Flex>
            <AddIcon />
            <span>Add</span>
          </Flex>
        </Button>
      </ProductInfo>
    </ProductContainer>
  );
};

export default Product;
