import { configureStore } from "@reduxjs/toolkit";
import addRestaurantSlice from "../features/addrestaurantsteps/addRestaurantSlice";
import completeProfileSlice from "../features/complete-profile-slice/completeProfileSlice";
import errorMessageSlice from "../features/error-message/errorMessageSlice";
import fetchLoaderSlice from "../features/fetch-loader/fetchLoaderSlice";
import sidebarSlice from "../features/sidebar/sidebarSlice";
import successModalSlice from "../features/success-modal/successModalSlice";
import userSlice from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    completeProfile: completeProfileSlice,
    restaurantStep: addRestaurantSlice,
    sidebar: sidebarSlice,
    user: userSlice,
    error: errorMessageSlice,
    fetchLoading: fetchLoaderSlice,
    successModal : successModalSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
