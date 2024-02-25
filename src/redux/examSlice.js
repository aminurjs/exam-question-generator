import { createSlice } from "@reduxjs/toolkit";

const exam = JSON.parse(sessionStorage.getItem("exam")) || null;

const initialState = {
  exam: exam,
};

const examSlice = createSlice({
  name: "examSlice",
  initialState,
  reducers: {
    addExam: (state, { payload }) => {
      state.exam = payload;
      const exam = JSON.stringify(payload);
      sessionStorage.setItem("exam", exam);
    },
  },
});
export const { addExam } = examSlice.actions;
export default examSlice.reducer;
