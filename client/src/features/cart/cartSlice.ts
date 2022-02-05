import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductInterface } from "../../interfaces/ProductInterface";

interface ProductCartInterface {
  product: ProductInterface;
  quantity: number;
}

interface InputState {
  productInfo: ProductCartInterface;
  restaurantId: string;
}
interface CartState {
  products: ProductCartInterface[];
  totalPrice: number;
  restaurantId: string | null;
}

const initialState: CartState = {
  products: [],
  totalPrice: 0,
  restaurantId: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<InputState>) => {
      const { productInfo, restaurantId } = action.payload;
      const { product } = productInfo;

      if (state.restaurantId && restaurantId !== state.restaurantId) {
        state.products = [];
        state.totalPrice = 0;
        state.restaurantId = "";
      }

      let alreadyExists: boolean = false;

      state.products.forEach((o) => {
        if (o.product._id === product._id) {
          alreadyExists = true;
        }
      });

      if (alreadyExists) {
        // if exists then increment the quantity
        state.products.map((o) => {
          if (o.product._id === product._id) {
            o.quantity += 1;
            state.totalPrice = state.totalPrice + o.product.price;
          }
        });

        state.restaurantId = restaurantId;

        return;
      }

      state.products = [...state.products, productInfo];
      state.restaurantId = restaurantId;
    },

    incrementQuantity: (state, action: PayloadAction<string>) => {
      // increment the quantity of product
      state.products.map((product) => {
        if (product.product._id === action.payload) {
          product.quantity++;
          state.totalPrice = state.totalPrice + product.product.price;
        }
      });
    },

    decrementQuantity: (state, action: PayloadAction<string>) => {
      // decrement the quantity of product
      state.products.map((product) => {
        if (product.product._id === action.payload) {
          if (product.quantity > 0) {
            product.quantity--;
            state.totalPrice = state.totalPrice - product.product.price;
          }

          if (product.quantity === 0) {
            // remove from the cart if product quantity becomes 0
            state.products = state.products.filter((product) => {
              if (product.product._id !== action.payload) return product;
            });
          }
        }
      });
    },

    clearCart: (state, action: PayloadAction) => {
      // clear the cart
      state.products = [];
      state.totalPrice = 0;
      state.restaurantId = "";
    },
  },
});

export const { addProduct, incrementQuantity, decrementQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
