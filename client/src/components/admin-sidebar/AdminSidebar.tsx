import { AdminSidebarContainer, Menu } from "./AdminSidebar.styled";
import { Dashboard, Create, Group, Home } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const activeStyle = {
  color: "hsl(349, 79%, 54%)",
};

const notActiveStyle = {
  color: "rgba(0,0,0,0.7)",
  background: "#fff",
};

const AdminSidebar = () => {
  const { open } = useSelector((state: RootState) => state.sidebar);

  return (
    <AdminSidebarContainer open={open}>
      <Menu>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : notActiveStyle)}
          to="/admin/dashboard"
        >
          <li>
            <Dashboard />
            <span>Dashboard</span>
          </li>
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : notActiveStyle)}
          to="/admin/applications"
        >
          <li>
            <Create />
            <span>Applications</span>
          </li>
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : notActiveStyle)}
          to="/admin/users"
        >
          <li>
            <Group />
            <span>Users</span>
          </li>
        </NavLink>
        <NavLink
          to="/admin/restaurants"
          style={({ isActive }) => (isActive ? activeStyle : notActiveStyle)}
        >
          <li>
            <Home />
            <span>Restaurants</span>
          </li>
        </NavLink>
      </Menu>
    </AdminSidebarContainer>
  );
};

export default AdminSidebar;
