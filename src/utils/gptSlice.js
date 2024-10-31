import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptFlag: false,
  },
  reducers: {
    addGptSearchFlag: (state) => {
      state.gptFlag = !state.gptFlag;
    },
  },
});

export const { addGptSearchFlag } = gptSlice.actions;

export default gptSlice.reducer;
