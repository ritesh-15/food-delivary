import { LocalShipping } from "@mui/icons-material";
import {
  ChartDiv,
  FeatureCard,
  FeatureCards,
  Wrapper,
} from "./RestaurantDashboard.styled";
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
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  BarElement
);

const RestaurantDashboard = () => {
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
      </FeatureCards>
      <ChartDiv>
        <h1>Order per month</h1>
        <Line data={LineData} options={options} />
      </ChartDiv>
    </Wrapper>
  );
};

export default RestaurantDashboard;
