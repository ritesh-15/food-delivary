import { useState } from "react";
import {
  Actions,
  FormControl,
  Grid,
  HeadingContainer,
  Image,
  MainContainer,
  OrdersChart,
  SubTitle,
  Title,
  Wrapper,
} from "./AdminRestaurantSingle.styled";
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
import Button from "../../../styles/Button";
import { Block, DeleteOutlineOutlined } from "@mui/icons-material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  BarElement
);

const AdminRestaurantSingle = () => {
  const [status, setStatus] = useState("active");

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
      <HeadingContainer>
        <Image>
          <img
            src="https://images.unsplash.com/photo-1642420805609-157d2f1a7f1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </Image>
        <Title status={status}>
          <h1>PK Biryani House</h1>
          <p>Biryani, Maharashtrian, Malwani, Mughlai</p>
          <span>Swargate, Pune</span>
          <small>Active</small>
        </Title>
      </HeadingContainer>
      <MainContainer>
        <SubTitle>Basic information</SubTitle>
        <Grid>
          <FormControl>
            <h1>Restaurant ID</h1>
            <p>4789561236</p>
          </FormControl>
          <FormControl>
            <h1>Registration Date</h1>
            <p>11-02-2003</p>
          </FormControl>
          <FormControl>
            <h1>Owner Name</h1>
            <p>Khore Ritesh Pradip </p>
          </FormControl>
          <FormControl>
            <h1>Onwer user ID</h1>
            <p>4789561236</p>
          </FormControl>
          <FormControl>
            <h1>Owner Email Address</h1>
            <p>riteshkhore@gmail.com</p>
          </FormControl>
          <FormControl>
            <h1>Owner contact number</h1>
            <p>9960130524</p>
          </FormControl>
        </Grid>
        <SubTitle>Restaurant Details</SubTitle>
        <Grid>
          <FormControl>
            <h1>Restaurnt Name</h1>
            <p>Hotel Kaushalya</p>
          </FormControl>
          <FormControl>
            <h1>Famous For </h1>
            <p>Pav bhaji</p>
          </FormControl>
          <FormControl>
            <h1>Number of food products</h1>
            <p>150</p>
          </FormControl>
          <FormControl>
            <h1>Food type</h1>
            <p>Vegeterain and non vegeterian</p>
          </FormControl>
          <FormControl>
            <h1>Minimum food price</h1>
            <p>RS 450</p>
          </FormControl>
          <FormControl>
            <h1>Number of daily customers</h1>
            <p>40</p>
          </FormControl>
        </Grid>

        <SubTitle>Location and contact details</SubTitle>
        <Grid>
          <FormControl>
            <h1>Located in</h1>
            <p>Baramati</p>
          </FormControl>
          <FormControl>
            <h1>Pin code</h1>
            <p>412204</p>
          </FormControl>
          <FormControl>
            <h1>Contact Number</h1>
            <p>9960130524</p>
          </FormControl>
        </Grid>

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
      </MainContainer>
      <OrdersChart>
        <h1>Orders Per Month</h1>
        <Line data={data} options={options} />
      </OrdersChart>
    </Wrapper>
  );
};

export default AdminRestaurantSingle;
