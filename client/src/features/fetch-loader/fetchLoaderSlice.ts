import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  isLoading: boolean;
}

const initialState: State = {
  isLoading: false,
};

const fetchLoaderSlice = createSlice({
  name: "fetchLoader",
  initialState,
  reducers: {
    setLoadingState: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setLoadingState } = fetchLoaderSlice.actions;

export default fetchLoaderSlice.reducer;
