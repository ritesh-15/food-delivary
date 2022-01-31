import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  open: boolean;
}

const initialState: State = {
  open: false,
};

const cartSidebarSlice = createSlice({
  name: "cartSidebar",
  initialState,
  reducers: {
    setOpen: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    },
  },
});

export const { setOpen } = cartSidebarSlice.actions;

export default cartSidebarSlice.reducer;
