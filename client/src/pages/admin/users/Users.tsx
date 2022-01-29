import { useEffect } from "react";
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
} from "./Users.styled";
import SearchIcon from "@mui/icons-material/Search";
import UserApi from "../../../api/usersApi";
import { useState } from "react";
import { UserInterface } from "../../../interfaces/UserInterface";
import { useFetchLoading, useMessage } from "../../../hooks";
import moment from "moment";

const Users = () => {
  // hooks
  const { setIsLoading } = useFetchLoading();
  const { setMessage } = useMessage();

  // users state
  const [users, setUsers] = useState<UserInterface[]>([]);

  useEffect(() => {
    const getAllUsers = async () => {
      setIsLoading(true);
      try {
        const { data } = await UserApi.getAllUsers();
        if (data.ok) {
          setUsers(data.users);
        }
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setMessage("Something weng wrong!");
      }
    };

    getAllUsers();
  }, []);

  return (
    <Wrapper>
      <SearchDiv>
        <div>
          <SearchIcon style={{ color: "hsl(0,0%,40%)" }} />
          <input type="text" placeholder="Search user" />
        </div>
      </SearchDiv>
      <TableWrapper>
        <Table>
          <TableHead>
            <TR>
              <TH>User ID</TH>
              <TH>User Name</TH>
              <TH>Is Admin</TH>
              <TH>Restaurant Owner</TH>
              <TH>Joined Date</TH>
            </TR>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TR>
                <TD>
                  <Link to={`/admin/users/${user._id}`}>{user._id}</Link>
                </TD>
                <TD>
                  <p>{user.name}</p>
                </TD>
                <TD status={user?.isAdmin}>
                  <small>{user.isAdmin ? "admin" : "non admin"}</small>
                </TD>
                <TD status={user?.isRestaurantOwner}>
                  <small>
                    {user.isRestaurantOwner ? "owner" : "non owner"}
                  </small>
                </TD>
                <TD>{moment(user.createdAt).format("DD MMMM YYYY")}</TD>
              </TR>
            ))}
          </TableBody>
        </Table>
      </TableWrapper>
    </Wrapper>
  );
};

export default Users;
