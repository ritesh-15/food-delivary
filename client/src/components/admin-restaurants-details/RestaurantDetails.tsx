import {
  Table,
  TableBody,
  TableHead,
  TD,
  TH,
  TR,
  Wrapper,
} from "./RestaurantDetails.styled";

const RestaurantDetails = () => {
  return (
    <Wrapper>
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
              <a href="">4589123664</a>
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
    </Wrapper>
  );
};

export default RestaurantDetails;
