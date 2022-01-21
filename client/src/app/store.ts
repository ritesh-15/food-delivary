import { configureStore } from "@reduxjs/toolkit";
import addRestaurantSlice from "../features/addrestaurantsteps/addRestaurantSlice";
import completeProfileSlice from "../features/complete-profile-slice/completeProfileSlice";
import sidebarSlice from "../features/sidebar/sidebarSlice";

export const store = configureStore({
  reducer: {
    completeProfile: completeProfileSlice,
    restaurantStep: addRestaurantSlice,
    sidebar: sidebarSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
