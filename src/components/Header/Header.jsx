import React, { useState } from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncSeries } from '../../features/movieSlice';

export default function Header() {

  const [item, setItem] = useState("");
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(fetchAsyncMovies(item))
    dispatch(fetchAsyncSeries(item))
    setItem("")
  }

  return (
    <div className='header'>
      <div><Link to="/"><h1>Movie App</h1></Link></div>
      <div className='search'>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Search' value={item} onChange={(e) => setItem(e.target.value)} required />
          <Button type='submit'><SearchIcon fontSize='small' htmlColor='#EFE1D1' /></Button>
        </form>
      </div>
      <AccountCircleIcon fontSize='large'  htmlColor='#EFE1D1'/>
    </div>
  )
}
