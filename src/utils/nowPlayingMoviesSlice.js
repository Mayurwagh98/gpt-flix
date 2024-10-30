import { createSlice } from "@reduxjs/toolkit";

const nowPlayingMoviesSlice = createSlice({
  name:"nowPlayingMovies",
  initialState:{
    nowPlayingMovies:null
  },

  reducers:{
    getNowPlayingMovies:(state, action) =>{
      state.nowPlayingMovies = action.payload
    }
  }

})

export const {getNowPlayingMovies} = nowPlayingMoviesSlice.actions

export default nowPlayingMoviesSlice.reducer
