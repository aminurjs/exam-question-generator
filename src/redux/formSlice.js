import { createSlice } from "@reduxjs/toolkit";

const initialForm = {
  exName: "",
  description: "",
  physics: [
    {
      question: "",
      options: { option_1: "", option_2: "", option_3: "" },
    },
  ],

  math: [
    { question: "", options: { option_1: "", option_2: "", option_3: "" } },
  ],

  chemistry: [
    {
      question: "",
      options: { option_1: "", option_2: "", option_3: "" },
    },
  ],
};

const initialState = {
  form: initialForm,
};

const formSlice = createSlice({
  name: "formSlice",
  initialState,
  reducers: {
    updateForm: (state, { payload }) => {
      if (payload) {
        state.form = {
          ...payload,
        };
      } else {
        state.form = initialForm;
      }
    },
  },
});
export const { updateForm } = formSlice.actions;
export default formSlice.reducer;
