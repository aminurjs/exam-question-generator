import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import examSlice from "./examSlice";
import formSlice from "./formSlice";

const rootReducer = combineReducers({
  userSlice: userSlice,
  examSlice: examSlice,
  formSlice: formSlice,
});

export default rootReducer;
