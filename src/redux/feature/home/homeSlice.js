import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  products: [],
  product: null,
};

export const asyncFetchProducts = createAsyncThunk(
  "home/fetchProducts",
  async () => {
    try {
      const responseObj = await fetch("https://fakestoreapi.com/products");
      const products = await responseObj.json();
      return products;
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }
);

export const asyncFetchSingleProduct = createAsyncThunk(
  "home/fetchSingProductDetails",
  async (productID) => {
    try {
      const responseObj = await fetch(
        `https://fakestoreapi.com/products/${productID}`
      );
      const product = await responseObj.json();
      return product;
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }
);

const homeSlice = createSlice({
  name: "homeSlice",
  initialState,
  reducers: {
    clearCurrentProduct: (state, action) => {
      state.product = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(asyncFetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(asyncFetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(asyncFetchSingleProduct.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(asyncFetchSingleProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      });
  },
});

export const { clearCurrentProduct } = homeSlice.actions;
export default homeSlice.reducer;
