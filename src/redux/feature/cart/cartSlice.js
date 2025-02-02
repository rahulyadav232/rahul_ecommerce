import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  products: [],
  loading: false,
};

export const addProductToCart = createAsyncThunk(
  "cart/addProductToCart",
  async (product) => {
    try {
      // Creating New Product with Less Properties
      const productObj = {
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        quantity: 1,
      };
      toast.success("Product Added Suceessfully");
      return productObj;
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }
);

export const removeProductFromCart = createAsyncThunk(
  "cart/removeProductFromCart",
  async (productID, thunkAPI) => {
    try {
      const {
        cart: { products },
      } = thunkAPI.getState();
      const cartProducts = [...products];
      const targetProductIndex = cartProducts.findIndex(
        (product) => product.id === productID
      );

      cartProducts.splice(targetProductIndex, 1);
      toast.success("Product Remove From Cart");
      return cartProducts;
    } catch (error) {
      console.log(error);
      toast.error("Failed to Remove From Cart");
    }
  }
);

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addProductToCart.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addProductToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.products = [...state.products, action.payload];
      })
      .addCase(removeProductFromCart.fulfilled, (state, action) => {
        state.products = action.payload;
      });
  },
});

export default cartSlice.reducer;
