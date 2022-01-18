import { AdminSidebarContainer, Menu } from "./AdminSidebar.styled";
import { Dashboard, Create, Group, Home } from "@mui/icons-material";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <AdminSidebarContainer>
      <Menu>
        <Link to="/admin/dashboard">
          <li>
            <Dashboard />
            <span>Dashboard</span>
          </li>
        </Link>
        <Link to="/admin/applications">
          <li>
            <Create />
            <span>Applications</span>
          </li>
        </Link>
        <Link to="/admin/users">
          <li>
            <Group />
            <span>Users</span>
          </li>
        </Link>
        <Link to="/admin/restaurants">
          <li>
            <Home />
            <span>Restaurants</span>
          </li>
        </Link>
      </Menu>
    </AdminSidebarContainer>
  );
};

export default AdminSidebar;
