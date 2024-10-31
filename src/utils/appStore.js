import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import nowPlayingMoviesReducer from "./nowPlayingMoviesSlice";
import gptFlag from "./gptSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    nowPlayingMovies: nowPlayingMoviesReducer,
    gptFlag: gptFlag,
  },
});

export default appStore;
