import React from 'react'
import Navbar from '../components/Navbar';
import SavedMovies from '../components/SavedMovies'

const Watchlist = () => {
  return (
    <div>
      <Navbar />
      <div className='w-full text-white'>
        <div className='w-full h-[150px] object-cover'></div>
          <h1 className='text-3xl md:text-5xl font-bold text-center'>Watchlist</h1>
      </div>
      <SavedMovies />
    </div>
  )
}

export default Watchlist;
