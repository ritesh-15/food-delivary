import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  open: boolean;
}

const initialState: State = {
  open: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setOpen: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    },
  },
});

export const { setOpen } = sidebarSlice.actions;

export default sidebarSlice.reducer;
