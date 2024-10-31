import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import nowPlayingMoviesReducer from "./nowPlayingMoviesSlice";
import gptFlag from "./gptSlice";
import langReducer from "./langSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    nowPlayingMovies: nowPlayingMoviesReducer,
    gptFlag: gptFlag,
    lang: langReducer,
  },
});

export default appStore;
