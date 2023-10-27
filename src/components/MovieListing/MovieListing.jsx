import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from '../MovieCard/MovieCard'
import "./MovieListing.css"

export default function MovieListing() {
  const movies = useSelector((state) => state.movies.movies)
  const series = useSelector((state) => state.movies.series)
  let renderMovies = "";
  // console.log(movies)
  renderMovies = movies.Response === "True" ?  (
    movies.Search.map((movie, index) => (
      <MovieCard key={index} data={movie} />
    ))
  ) : (
    <div className='movies-error'>
      <h3>{movies.Error}</h3>
    </div>
  )
  let renderSeries = "";
  // console.log(series)
  renderSeries = series.Response === "True" ?  (
    series.Search.map((movie, index) => (
      <MovieCard key={index} data={movie} />
    ))
  ) : (
    <div className='movies-error'>
      <h3>{series.Error}</h3>
    </div>
  )

  return (
    <div className='movie-wrapper'>
      <div className='movie-list'>
        <h2>Movies</h2>
        <div className='movie-container'>
          {renderMovies}
        </div>
      </div>
      <div className='show-list'>
        <h2>Shows</h2>
        <div className='movie-container'>
          {renderSeries}
        </div>
      </div>
    </div>
  )
}
