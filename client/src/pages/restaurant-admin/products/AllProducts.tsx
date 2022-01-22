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

const AllProducts = () => {
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
            <TR>
              <TD>
                <Link to="/admin/restaurant/products/4">13345698</Link>
              </TD>
              <TD>
                <p>Misal pav</p>
              </TD>
              <TD>11/05/2002</TD>
              <TD status={"Veg"}>
                <small>Vegiterian</small>
              </TD>
            </TR>
            <TR>
              <TD>
                <Link to="/admin/restaurant/products/4">13345698</Link>
              </TD>
              <TD>
                <p>Misal pav</p>
              </TD>
              <TD>11/05/2002</TD>
              <TD status={"nonveg"}>
                <small>Non vegiterian</small>
              </TD>
            </TR>
            <TR>
              <TD>
                <Link to="/admin/restaurant/products/4">13345698</Link>
              </TD>
              <TD>
                <p>Misal pav</p>
              </TD>
              <TD>11/05/2002</TD>
              <TD status={"Veg"}>
                <small>Vegiterian</small>
              </TD>
            </TR>
            <TR>
              <TD>
                <Link to="/admin/restaurant/products/4">13345698</Link>
              </TD>
              <TD>
                <p>Misal pav</p>
              </TD>
              <TD>11/05/2002</TD>
              <TD status={"Veg"}>
                <small>Vegiterian</small>
              </TD>
            </TR>
          </TableBody>
        </Table>
      </TableWrapper>
    </Wrapper>
  );
};

export default AllProducts;
