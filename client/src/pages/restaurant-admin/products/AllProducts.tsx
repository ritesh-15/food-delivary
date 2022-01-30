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
import { TableSkeleton } from "../../../components";
import { useFetchLoading, useMessage } from "../../../hooks";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";

const AllProducts = () => {
  // loading
  const { setIsLoading } = useFetchLoading();
  const { setMessage } = useMessage();
  const { restaurant } = useSelector((state: RootState) => state.restaurant);

  // products
  const [products, setProducts] = useState<ProductInterface[]>([]);

  useEffect(() => {
    if (!restaurant) return;

    const getAllProducts = async () => {
      setIsLoading(true);
      try {
        const { data } = await ProductApi.allProducts(restaurant._id);
        if (data.ok) {
          setProducts(data.products);
        }
        setIsLoading(false);
      } catch (error) {
        setMessage("Something went wrong!", true);
        setIsLoading(false);
      }
    };

    getAllProducts();
  }, [restaurant]);

  return (
    <>
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
    </>
  );
};

export default AllProducts;
