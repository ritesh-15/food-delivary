import { AdminSidebarContainer, Menu } from "./AdminSidebar.styled";
import { Dashboard, Create, Group, Home } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const activeStyle = {
  background: "hsl(200, 44%, 39%)",
  color: "#fff",
};

const notActiveStyle = {
  color: "rgba(0,0,0,0.7)",
  background: "#fff",
};

const AdminSidebar = () => {
  return (
    <AdminSidebarContainer>
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
