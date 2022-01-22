import { Dashboard, ShoppingBag, ShoppingCart } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../../app/store";
import { Menu, Wrapper } from "./RestaurantSidebar.styled";

const activeStyle = {
  color: "hsl(349, 79%, 54%)",
};

const notActiveStyle = {
  color: "rgba(0,0,0,0.7)",
  background: "#fff",
};

const RestaurantSidebar = () => {
  const { open } = useSelector((state: RootState) => state.sidebar);

  return (
    <Wrapper open={open}>
      <Menu>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : notActiveStyle)}
          to="/admin/restaurant/dashboard"
        >
          <li>
            <Dashboard />
            <span>Dashboard</span>
          </li>
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : notActiveStyle)}
          to="/admin/restaurant/products"
        >
          <li>
            <ShoppingBag />
            <span>Products</span>
          </li>
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : notActiveStyle)}
          to="/admin/restaurant/orders"
        >
          <li>
            <ShoppingCart />
            <span>Orders</span>
          </li>
        </NavLink>
      </Menu>
    </Wrapper>
  );
};

export default RestaurantSidebar;
