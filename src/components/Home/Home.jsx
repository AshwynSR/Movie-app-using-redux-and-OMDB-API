import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncSeries } from '../../features/movieSlice'


export default function Home() {

  const dispatch = useDispatch()
  const movieText = "Hero"
  const seriesText = "Company"

  useEffect(() =>{
    dispatch(fetchAsyncMovies(movieText))
    dispatch(fetchAsyncSeries(seriesText))
  }, [dispatch])

  return (
    <div>
      <div><MovieListing /></div>
    </div>
  )
}
