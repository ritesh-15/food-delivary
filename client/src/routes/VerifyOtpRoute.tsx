import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../hooks";

const VerifyOtpRoute = () => {
  const { otpState } = useUser();
  return otpState.hash ? <Outlet /> : <Navigate to={{ pathname: "/" }} />;
};

export default VerifyOtpRoute;
