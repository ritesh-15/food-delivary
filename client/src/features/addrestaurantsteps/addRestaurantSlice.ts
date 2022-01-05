import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  step: number;
}

const initialState: State = {
  step: 1,
};

const addRestaurantSlice = createSlice({
  name: "applicationSteps",
  initialState,
  reducers: {
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
  },
});

export const { setStep } = addRestaurantSlice.actions;
export default addRestaurantSlice.reducer;
