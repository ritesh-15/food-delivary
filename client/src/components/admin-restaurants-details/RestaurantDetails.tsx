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
} from "./RestaurantDetails.styled";
import SearchIcon from "@mui/icons-material/Search";

const RestaurantDetails = () => {
  return (
    <Wrapper>
      <SearchDiv>
        <div>
          <SearchIcon style={{ color: "hsl(0,0%,40%)" }} />
          <input type="text" placeholder="Search restaurant" />
        </div>
      </SearchDiv>
      <TableWrapper>
        <Table>
          <TableHead>
            <TR>
              <TH>Restaurant ID</TH>
              <TH>Restaurant Name</TH>
              <TH>Restaurant Status</TH>
              <TH>Registration Date</TH>
            </TR>
          </TableHead>
          <TableBody>
            <TR>
              <TD>
                <Link to="/admin/restaurants/4">4589123664</Link>
              </TD>
              <TD>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </TD>
              <TD>
                <small>Active</small>
              </TD>
              <TD>11/05/2002</TD>
            </TR>
            <TR>
              <TD>
                <Link to="/admin/restaurants/4">4589123664</Link>
              </TD>
              <TD>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </TD>
              <TD>
                <small>Active</small>
              </TD>
              <TD>11/05/2002</TD>
            </TR>
          </TableBody>
        </Table>
      </TableWrapper>
    </Wrapper>
  );
};

export default RestaurantDetails;
