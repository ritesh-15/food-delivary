import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserInterface } from "../../interfaces/UserInterface";

interface State {
  user: UserInterface | null;
  otpState: {
    hash: string;
    email: string;
  };
}

const initialState: State = {
  user: null,
  otpState: {
    hash: "",
    email: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserInterface>) => {
      state.user = action.payload;
    },
    setOtpState: (
      state,
      action: PayloadAction<{ hash: string; email: string }>
    ) => {
      state.otpState = action.payload;
    },
  },
});

export const { setUser, setOtpState } = userSlice.actions;

export default userSlice.reducer;
