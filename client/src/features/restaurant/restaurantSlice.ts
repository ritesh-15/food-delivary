import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RestaurantInterface } from "../../interfaces/RestaurantInterface";

interface State {
  restaurant: RestaurantInterface | null;
}

const initialState: State = {
  restaurant: null,
};

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant: (state, action: PayloadAction<RestaurantInterface>) => {
      state.restaurant = action.payload;
    },
  },
});

export const { setRestaurant } = restaurantSlice.actions;

export default restaurantSlice.reducer;
