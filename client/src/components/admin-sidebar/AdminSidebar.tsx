import { AdminSidebarContainer, Menu } from "./AdminSidebar.styled";
import { Dashboard, Create, Group, Home } from "@mui/icons-material";

const AdminSidebar = () => {
  return (
    <AdminSidebarContainer>
      <Menu>
        <li>
          <Dashboard />
          <span>Dashboard</span>
        </li>
        <li>
          <Create />
          <span>Applications</span>
        </li>
        <li>
          <Group />
          <span>Users</span>
        </li>
        <li>
          <Home />
          <span>Restaurants</span>
        </li>
      </Menu>
    </AdminSidebarContainer>
  );
};

export default AdminSidebar;
