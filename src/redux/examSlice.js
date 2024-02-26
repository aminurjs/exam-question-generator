import { createSlice } from "@reduxjs/toolkit";

const exam = JSON.parse(sessionStorage.getItem("exam")) || null;

const initialState = {
  exam: exam,
};

const examSlice = createSlice({
  name: "examSlice",
  initialState,
  reducers: {
    submitExam: (state, { payload }) => {
      state.exam = payload;
      const exam = JSON.stringify(payload);
      sessionStorage.setItem("exam", exam);
    },
  },
});
export const { submitExam } = examSlice.actions;
export default examSlice.reducer;
