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
  },
});
console.log(dataSlice.actions.getProductData("hello adn welcom"));
// {type: "counter/increment"}
export const { getProductData } = dataSlice.actions;
