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
import { useFetch, useFetchLoading, useMessage } from "../../../hooks";
import moment from "moment";
import { DataLoader } from "../../../components";

const Users = () => {
  // users state
  const [users, setUsers] = useState<UserInterface[]>([]);

  const { loading, data } = useFetch("/user/all");

  useEffect(() => {
    if (!data) return;

    setUsers(data.users);
  }, [data]);

  return (
    <>
      {loading ? (
        <DataLoader />
      ) : (
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
      )}
    </>
  );
};

export default Users;
