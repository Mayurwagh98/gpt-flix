import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptFlag: false,
    gptMoviesNames: null,
    gptMoviesResult: null,
  },
  reducers: {
    addGptSearchFlag: (state) => {
      state.gptFlag = !state.gptFlag;
    },
    addGptMoviesRes: (state, action) => {
      const { moviesName, moviesRes } = action.payload;

      state.gptMoviesNames = moviesName;
      state.gptMoviesResult = moviesRes;
    },
  },
});

export const { addGptSearchFlag, addGptMoviesRes } = gptSlice.actions;

export default gptSlice.reducer;
