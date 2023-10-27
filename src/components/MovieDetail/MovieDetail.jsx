import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { fetchAsyncMovieOrSeriesDetail } from '../../features/movieSlice'
import "./MovieDetail.css"
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { removeSelectedMovieOrShow } from '../../features/movieSlice'

export default function MovieDetail() {

  const { imdbID } = useParams()
  const item = useSelector((state) => state.movies.seletMovieOrSeries)
  const dispatch = useDispatch()
  
  useEffect(()=> {
    dispatch(fetchAsyncMovieOrSeriesDetail(imdbID))
    return () => {
      dispatch(removeSelectedMovieOrShow());
    }
  },[dispatch, imdbID] )
  console.log(item)
  return (
    <div className='container-fluid movie-detail'>
      {Object.keys(item).length === 0 ? (<div>...Loading</div>) :
      <>
      <div>
        <h1>{item.Title}</h1>
        <div className='ratings'>
          <span>IMDB : <StarBorderIcon fontSize='small' />{item.imdbRating}</span>
          <span>Rotten Tomatoes: <ThumbUpIcon />{item.Ratings && item.Ratings[1] ? item.Ratings[1].Value : "N/A"}</span>
          <span>Year: {item.Year}</span>
        </div>
        <div className='movie-plot'>{item.Plot}</div>
        <div className='other-details'>
            <div>Director: {item.Director}</div>
            <div>Actors: {item.Actors}</div>
            <div>Genre: {item.Genre}</div>
            <div>Release Date: {item.Released}</div>
            <div>Runtime: {item.Runtime}</div>
        </div>
      </div>
      <div>
        <img src={item.Poster} />
      </div>
      </>
    }
    </div>
  ) 
}