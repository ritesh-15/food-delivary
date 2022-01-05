import { configureStore } from "@reduxjs/toolkit";
import addRestaurantSlice from "../features/addrestaurantsteps/addRestaurantSlice";
import completeProfileSlice from "../features/complete-profile-slice/completeProfileSlice";

export const store = configureStore({
  reducer: {
    completeProfile: completeProfileSlice,
    restaurantStep: addRestaurantSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
