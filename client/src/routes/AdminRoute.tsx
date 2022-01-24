import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../hooks";

const AdminRoute = () => {
  const { user } = useUser();
  return user?.isAdmin ? <Outlet /> : <Navigate to="/login" />;
};

export default AdminRoute;
