import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CompleteProfileState {
  step: number;
}

const initialState: CompleteProfileState = {
  step: 1,
};

const completeProfileSlice = createSlice({
  name: "complete-profile",
  initialState,
  reducers: {
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
  },
});

export const { setStep } = completeProfileSlice.actions;
export default completeProfileSlice.reducer;
