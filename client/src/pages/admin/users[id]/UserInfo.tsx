import Button from "../../../styles/Button";
import {
  Actions,
  FormControl,
  Grid,
  MainContainer,
  OrdersChart,
  Wrapper,
} from "./UserInfo.styled";
import { Block, DeleteOutlineOutlined } from "@mui/icons-material";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  BarElement
);

const UserInfo = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Orders",
        data: [1, 2, 3, 4, 2, 3, 5, 7, 4, 5.7, 4, 6],
        borderWidth: 1,
        tension: 0.25,
        backgroundColor: "hsl(349, 79%, 54%)",
        borderColor: "hsl(349, 79%, 54%)",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <Wrapper>
      <MainContainer>
        <Grid>
          <FormControl>
            <h1>User ID</h1>
            <p>47581236</p>
          </FormControl>
          <FormControl>
            <h1>Joined date</h1>
            <p>22 Jan 2022</p>
          </FormControl>
          <FormControl>
            <h1>Name</h1>
            <p>Khore ritesh pradip</p>
          </FormControl>
          <FormControl>
            <h1>Email address</h1>
            <p>riteshkhore@gmail.com</p>
          </FormControl>
          <FormControl>
            <h1>Email address</h1>
            <p>riteshkhore@gmail.com</p>
          </FormControl>
          <FormControl>
            <h1>Contact number</h1>
            <p>9970834262</p>
          </FormControl>
          <FormControl>
            <h1>Restaurant Owner</h1>
            <p>false</p>
          </FormControl>
        </Grid>
      </MainContainer>
      <Actions>
        <Button hover>
          <Block />
          <span>Block</span>
        </Button>
        <Button>
          <DeleteOutlineOutlined />
          <span>Delete</span>
        </Button>
      </Actions>
      <OrdersChart>
        <h1>Orders Per Month</h1>
        <Line data={data} options={options} />
      </OrdersChart>
    </Wrapper>
  );
};

export default UserInfo;
