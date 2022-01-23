import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  message: string;
}

const initialState: State = {
  message: "",
};

const errorMessageSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  },
});

export const { setError } = errorMessageSlice.actions;

export default errorMessageSlice.reducer;
