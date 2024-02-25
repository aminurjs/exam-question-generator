import { configureStore } from "@reduxjs/toolkit";
import examSlice from "./examSlice";

const store = configureStore({
  reducer: {
    examSlice: examSlice,
  },
});
export default store;
