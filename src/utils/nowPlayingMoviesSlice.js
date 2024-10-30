import { createSlice } from "@reduxjs/toolkit";

const nowPlayingMoviesSlice = createSlice({
  name: "nowPlayingMovies",
  initialState: {
    nowPlayingMovies: null,
    movieTrailer: null,
    addPopularMovies: null,
    topRatedMovies: null,
    upComingMovies: null,
  },

  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpComingMovies: (state, action) => {
      state.upComingMovies = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addMovieTrailer,
  addPopularMovies,
  addTopRatedMovies,
  addUpComingMovies,
} = nowPlayingMoviesSlice.actions;

export default nowPlayingMoviesSlice.reducer;
