import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../hooks";

function RestaurantAdmin() {
  const { user } = useUser();
  return user?.isRestaurantOwner ? <Outlet /> : <Navigate to="/login" />;
}

export default RestaurantAdmin;
