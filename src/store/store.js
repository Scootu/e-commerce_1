import { configureStore } from "@reduxjs/toolkit";
import { dataSlice } from "./createSlice";

export default configureStore({
  reducer: {
    productsData: dataSlice.reducer,
  },
});
