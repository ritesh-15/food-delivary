import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  open: boolean;
  title: string;
  description?: string;
  callback?: () => void;
}

const initialState: State = {
  open: false,
  title: "",
  description: "",
  callback: undefined,
};

const successModalSlice = createSlice({
  name: "successModal",
  initialState,
  reducers: {
    setSuccessModalState: (state, action: PayloadAction<State>) => {
      state.description = action.payload.description;
      state.open = action.payload.open;
      state.title = action.payload.title;
      state.callback = action.payload.callback || undefined;
    },
  },
});

export const { setSuccessModalState } = successModalSlice.actions;

export default successModalSlice.reducer;
