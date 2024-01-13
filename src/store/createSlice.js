import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};
export const dataSlice = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {
    getProductData: (state, action) => {
      state.data.push(action.payload);
    },
    removeProduct: (state, action) => {
      const index = state.data.findIndex((item) => item.id === action.payload);

      if (index !== -1) {
        // Check if the item is found
        state.data.splice(index, 1); // Remove 1 element at the found index
      }
    },
  },
});

// {type: "counter/increment"}
export const { getProductData, removeProduct } = dataSlice.actions;
