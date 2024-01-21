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
      const index = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        // Check if the item is found
        state.data.splice(index, 1); // Remove 1 element at the found index
      }
    },
    modifieItemNumber: (state, action) => {
      const index = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        if (Object.hasOwn(state.data[index], "nbItems")) {
          // If the key exists, update its value
          state.data[index] = {
            ...state.data[index],
            nbItems: action.payload.nbItems,
          };
        } else {
          // If the key doesn't exist, add a new key-value pair
          state.data[index].nbItems = action.payload.nbItems;
        }
      }
    },
  },
});

// {type: "counter/increment"}
export const { getProductData, removeProduct, modifieItemNumber } =
  dataSlice.actions;
