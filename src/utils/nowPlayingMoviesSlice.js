import { createSlice } from "@reduxjs/toolkit";

const nowPlayingMoviesSlice = createSlice({
  name:"nowPlayingMovies",
  initialState:{
    nowPlayingMovies:null
  },

  reducers:{
    addNowPlayingMovies:(state, action) =>{
      state.nowPlayingMovies = action.payload
    }
  }

})

export const {addNowPlayingMovies} = nowPlayingMoviesSlice.actions

export default nowPlayingMoviesSlice.reducer
