import { FC } from "react";
import Button from "../../styles/Button";
import { ProductContainer, ProductImage, ProductInfo } from "./Product.styled";
import AddIcon from "@mui/icons-material/Add";
import Flex from "../../styles/Flex";

const Product: FC = () => {
  return (
    <ProductContainer>
      <ProductImage>
        <img
          src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </ProductImage>
      <ProductInfo>
        <div>
          <h1>Special Amul Pav Bhaji</h1>
          <div>
            <span></span>
          </div>
        </div>
        <p>Rs 250</p>
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
