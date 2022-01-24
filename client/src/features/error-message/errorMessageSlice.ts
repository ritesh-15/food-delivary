import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  message: string;
  error: boolean;
}

const initialState: State = {
  message: "",
  error: false,
};

const errorMessageSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setError: (
      state,
      action: PayloadAction<{ message: string; error: boolean }>
    ) => {
      state.message = action.payload.message;
      state.error = action.payload.error;
    },
  },
});

export const { setError } = errorMessageSlice.actions;

export default errorMessageSlice.reducer;
