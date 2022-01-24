import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useUser } from "../hooks";

const Protected = () => {
  const { user } = useUser();
  return user?.isAdmin ? (
    <Navigate to="/admin/dashboard" />
  ) : user?.isRestaurantOwner ? (
    <Navigate to="/admin/restaurant/dashboard" />
  ) : user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default Protected;
