import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// initialState
const initialState = {
  movieList: [],
  loadMovieLoading: false,
  loadMovieDone: false,
  loadMovieError: null,
};

// 비동기 액션
export const loadMovie = createAsyncThunk(
  "movie/loadMovie",
  async (thunkAPI) => {
    try {
      const response = await axios.get(
        "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.data);
    }
  }
);

// reducer
const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(loadMovie.pending, (state) => {
        state.loadMovieLoading = true;
        state.loadMovieDone = false;
        state.loadMovieError = null;
      })
      .addCase(loadMovie.fulfilled, (state, action) => {
        state.loadMovieLoading = false;
        state.loadMovieDone = true;
        state.loadMovieError = null;
        state.movieList = state.movieList.concat(action.payload.data.movies);
      })
      .addCase(loadMovie.rejected, (state, action) => {
        state.loadMovieLoading = false;
        state.loadMovieDone = false;
        state.loadMovieError = action.payload;
      }),
});

export default movieSlice;
