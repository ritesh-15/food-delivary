import {
  FeatureCard,
  FeatureCards,
  Wrapper,
  ChartDiv,
  ChartsFlexDiv,
  NewJoinedDiv,
  NewJoinedUsers,
  NewJoinedRestaurants,
} from "./Dashboard.styled";
import {
  LocalShipping,
  Group,
  Home,
  KeyboardArrowUp,
} from "@mui/icons-material";
import { Line, Bar } from "react-chartjs-2";
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
import { useEffect } from "react";
import { useSocket } from "../../../hooks";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  BarElement
);

const Dashboard = () => {
  const BarData = {
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
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
      },
    ],
  };

  const LineData = {
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
    responsive: true,
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
      <FeatureCards>
        <FeatureCard>
          <h1>Orders</h1>
          <div>
            <LocalShipping style={{ fontSize: "2rem" }} />
            <span>45</span>
          </div>
          <p>Compared to last month</p>
        </FeatureCard>
        <FeatureCard down>
          <h1>Users</h1>
          <div>
            <Group style={{ fontSize: "2rem" }} />
            <span>74</span>
          </div>
          <p>Compared to last month</p>
        </FeatureCard>
        <FeatureCard>
          <h1>Restaurants</h1>
          <div>
            <Home style={{ fontSize: "2rem" }} />
            <span>5</span>
          </div>
          <p>Compared to last month</p>
        </FeatureCard>
      </FeatureCards>
      <ChartDiv>
        <h1>Orders Per Month</h1>
        <Bar data={BarData} options={options} />
      </ChartDiv>
      <ChartsFlexDiv>
        <ChartDiv>
          <h1>Users per month</h1>
          <Line data={LineData} options={options} />
        </ChartDiv>{" "}
        <ChartDiv>
          <h1>Restaurants per month</h1>
          <Line data={LineData} options={options} />
        </ChartDiv>
      </ChartsFlexDiv>
      <NewJoinedDiv>
        <NewJoinedUsers>
          <h3>New Joined Users</h3>
          <div>
            <h1>Ritesh Khore</h1>
            <small>Active</small>
          </div>
          <div>
            <h1>Ritesh Khore</h1>
            <small>Active</small>
          </div>
          <div>
            <h1>Ritesh Khore</h1>
            <small>Active</small>
          </div>
          <div>
            <h1>Ritesh Khore</h1>
            <small>Active</small>
          </div>
          <div>
            <h1>Ritesh Khore</h1>
            <small>Active</small>
          </div>
        </NewJoinedUsers>
        <NewJoinedRestaurants>
          <h3>New Joined Restaurants</h3>
          <div>
            <h1>Ritesh Khore</h1>
            <small>Active</small>
          </div>
          <div>
            <h1>Ritesh Khore</h1>
            <small>Active</small>
          </div>
          <div>
            <h1>Ritesh Khore</h1>
            <small>Active</small>
          </div>
          <div>
            <h1>Ritesh Khore</h1>
            <small>Active</small>
          </div>
          <div>
            <h1>Ritesh Khore</h1>
            <small>Active</small>
          </div>
        </NewJoinedRestaurants>
      </NewJoinedDiv>
    </Wrapper>
  );
};

export default Dashboard;
