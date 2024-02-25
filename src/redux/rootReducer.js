import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import examSlice from "./examSlice";

const rootReducer = combineReducers({
  userSlice: userSlice,
  examSlice: examSlice,
});

export default rootReducer;
