import Button from "../../../styles/Button";
import {
  Actions,
  FormControl,
  Grid,
  MainContainer,
  OrdersChart,
  Wrapper,
  ActionSelectBox,
} from "./UserInfo.styled";
import { Block, Delete, DeleteOutlineOutlined } from "@mui/icons-material";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import UserApi from "../../../api/usersApi";
import { useState } from "react";
import { UserInterface } from "../../../interfaces/UserInterface";
import moment from "moment";
import { SelectBox } from "../../../components";
import { useFetchLoading, useMessage } from "../../../hooks";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  BarElement
);

const OPTIONS = ["make admin", "remove admin"];

const UserInfo = () => {
  const { id } = useParams();
  const { setIsLoading } = useFetchLoading();
  const { setMessage } = useMessage();
  const navigate = useNavigate();

  // user state
  const [user, setUser] = useState<UserInterface>();

  const [roll, setRoll] = useState<string>("");

  useEffect(() => {
    if (!id) return;

    const getUserDetails = async () => {
      setIsLoading(true);
      try {
        const { data } = await UserApi.getSingleUser(id);

        if (data.ok) {
          setUser(data.user);
        }
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    getUserDetails();
  }, [id]);

  // update user admin status
  const updateAdminStatus = async () => {
    if (!id) return;

    setIsLoading(true);

    try {
      const { data } = await UserApi.adminUpdateUser(id, {
        isAdmin: roll === "make admin",
      });
      setIsLoading(false);
      setMessage("User updated successfully!");
    } catch (error) {
      setIsLoading(false);
      setMessage("Something went wrong!");
    }
  };

  // delete user
  const deleteUser = async () => {
    if (!id) return;

    setIsLoading(true);

    try {
      const { data } = await UserApi.deleteUser(id);
      setIsLoading(false);
      setMessage("User deleted successfully!");
      navigate("/admin/users");
    } catch (error) {
      setIsLoading(false);
      setMessage("Something went wrong!");
    }
  };

  return (
    <Wrapper>
      <MainContainer>
        <Grid>
          <FormControl>
            <h1>User ID</h1>
            <p>{user?._id}</p>
          </FormControl>
          <FormControl>
            <h1>Joined date</h1>
            <p>{user && moment(user.createdAt).format("DD MMMM YYYY")}</p>
          </FormControl>
          <FormControl>
            <h1>Name</h1>
            <p>{user?.name}</p>
          </FormControl>
          <FormControl>
            <h1>Email address</h1>
            <p>{user?.email}</p>
          </FormControl>
          <FormControl>
            <h1>Number</h1>
            <p>{user?.number}</p>
          </FormControl>
          <FormControl>
            <h1>Restaurant Owner</h1>
            <p>{user?.isRestaurantOwner ? "true" : "false"}</p>
          </FormControl>
        </Grid>
      </MainContainer>
      <ActionSelectBox>
        <SelectBox
          label="Change roll"
          options={OPTIONS}
          current={roll}
          changeCurrent={setRoll}
        />
        <Button onClick={updateAdminStatus} hover>
          Save and Update
        </Button>
      </ActionSelectBox>
      <Actions>
        <Button onClick={deleteUser} hover>
          <Delete />
          <span>Delete User</span>
        </Button>
      </Actions>
      {/* <OrdersChart>
        <h1>Orders Per Month</h1>
        <Line data={data} options={options} />
      </OrdersChart> */}
    </Wrapper>
  );
};

export default UserInfo;
