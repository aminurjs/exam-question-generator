import { createSlice } from "@reduxjs/toolkit";

const userinfo = JSON.parse(localStorage.getItem("user")) || null;

const initialState = {
  user: userinfo,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.user = payload;
      const user = JSON.stringify(payload);
      localStorage.setItem("user", user);
    },
    logOut: (state, { payload }) => {
      if (payload === "logout") {
        state.user = null;
        localStorage.removeItem("user");
      }
    },
  },
});
export const { login, logOut } = userSlice.actions;
export default userSlice.reducer;
