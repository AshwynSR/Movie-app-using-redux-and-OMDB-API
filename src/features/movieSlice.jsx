import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import MovieApi from '../commons/apis/MovieApi'
import {MovieApiKey} from '../commons/apis/MovieApiKey'

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async (term)=>{
  const response = await MovieApi
  .get(`?apikey=${MovieApiKey}&s=${term}&type=movie`)
  return response.data;
})

export const fetchAsyncSeries = createAsyncThunk("series/fetchAsyncSeries", async (term)=>{
  const response = await MovieApi
  .get(`?apikey=${MovieApiKey}&s=${term}&type=series`)
  return response.data;
})

export const fetchAsyncMovieOrSeriesDetail = createAsyncThunk("moviesOrSeriesDetail/fetchAsyncMovieOrSeriesDetail", async (imdbID)=>{
  const response = await MovieApi
  .get(`?apikey=${MovieApiKey}&i=${imdbID}&plot=full`)
  return response.data;
})

const initialState = {
     movies: {},
     series: {},
     seletMovieOrSeries: {},
}

export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
      removeSelectedMovieOrShow: (state) => {
        state.seletMovieOrSeries = {};
      }
    },
    extraReducers: {
      [fetchAsyncMovies.pending]: () => {
        console.log("Pending")
      },
      [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
        console.log("Fetched Successfully")
        return { ...state, movies: payload};
      },
      [fetchAsyncMovies.rejected]: () => {
        console.log('Rejected')
      },
      [fetchAsyncSeries.fulfilled]: (state, {payload}) => {
        console.log("Fetched Successfully")
        return { ...state, series: payload};
      },
      [fetchAsyncMovieOrSeriesDetail.fulfilled]: (state, {payload}) => {
        console.log("Fetched Successfully")
        return { ...state, seletMovieOrSeries: payload};
      },
    }
  })
  
  export const { removeSelectedMovieOrShow } = movieSlice.actions
  
  export default movieSlice.reducer

