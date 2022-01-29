import { Link } from "react-router-dom";
import {
  SearchDiv,
  Table,
  TableBody,
  TableHead,
  TableWrapper,
  TD,
  TH,
  TR,
  Wrapper,
} from "./AllProducts.styled";
import SearchIcon from "@mui/icons-material/Search";
import Button from "../../../styles/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useEffect } from "react";
import ProductApi from "../../../api/productApi";
import { useState } from "react";
import { ProductInterface } from "../../../interfaces/ProductInterface";
import moment from "moment";

const AllProducts = () => {
  // products
  const [products, setProducts] = useState<ProductInterface[]>([]);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const { data } = await ProductApi.allProducts();
        if (data.ok) {
          setProducts(data.products);
        }
        console.log(data);
      } catch (error) {}
    };

    getAllProducts();
  }, []);

  return (
    <Wrapper>
      <SearchDiv>
        <div>
          <SearchIcon style={{ color: "hsl(0,0%,40%)" }} />
          <input type="text" placeholder="Search food" />
        </div>
        <Button hover>
          <Link to="/admin/restaurant/products/new">
            <AddCircleIcon />
            <span>Add food</span>
          </Link>
        </Button>
      </SearchDiv>
      <TableWrapper>
        <Table>
          <TableHead>
            <TR>
              <TH>Food ID</TH>
              <TH>Food Name</TH>
              <TH>Added Date</TH>
              <TH>Food Type</TH>
            </TR>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TR key={product._id}>
                <TD>
                  <Link to={`/admin/restaurant/products/${product._id}`}>
                    {product._id}
                  </Link>
                </TD>
                <TD>
                  <p>{product.name}</p>
                </TD>
                <TD>{moment(product.createdAt).format("DD MMMM YYYY")}</TD>
                <TD status={product.type}>
                  <small>{product.type}</small>
                </TD>
              </TR>
            ))}
          </TableBody>
        </Table>
      </TableWrapper>
    </Wrapper>
  );
};

export default AllProducts;
