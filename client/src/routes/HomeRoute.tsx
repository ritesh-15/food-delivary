import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../hooks";

const HomeRoute = () => {
  const { user } = useUser();
  return user?.isAdmin ? (
    <Navigate to="/admin/dashboard" />
  ) : user?.isRestaurantOwner ? (
    <Navigate to="/admin/restaurant/dashboard" />
  ) : (
    <Outlet />
  );
};

export default HomeRoute;
