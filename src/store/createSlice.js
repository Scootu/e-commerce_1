import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "productsData",
  initialState: {
    data: [],
  },
  reducers: {
    getProductData: (state, action) => {
      state.data = [];
    },
  },
});
export const { getProductData } = dataSlice.actions;

export default dataSlice.reducer;
