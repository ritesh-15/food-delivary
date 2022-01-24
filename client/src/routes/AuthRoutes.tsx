import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../hooks";

const AuthRoutes = () => {
  const { user } = useUser();
  return user?.isAdmin ? (
    <Navigate to="/admin/dashboard" />
  ) : user?.isRestaurantOwner ? (
    <Navigate to="/admin/restaurant/dashboard" />
  ) : user ? (
    <Navigate to="/" />
  ) : (
    <Outlet />
  );
};

export default AuthRoutes;
