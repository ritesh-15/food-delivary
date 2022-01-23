import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setOtpState, setUser } from "../../features/user/userSlice";
import { UserInterface } from "../../interfaces/UserInterface";

const useUser = () => {
  const dispatch = useDispatch();
  const { user, otpState } = useSelector((state: RootState) => state.user);

  const changeUserState = (user: UserInterface): void => {
    dispatch(setUser(user));
  };

  const changeOtpState = (state: { hash: string; email: string }): void => {
    dispatch(setOtpState(state));
  };

  return { user, changeUserState, otpState, changeOtpState };
};

export default useUser;
