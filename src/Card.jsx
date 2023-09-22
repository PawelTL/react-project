import { useState } from 'react'
import './Card.css'

function Card({movie, handleClick}) {

  return (
    <div className='relative w-[250px] h-[380px] hover:scale-105 duration-100' onClick={handleClick}>
      <img className='w-full h-full' src={movie.Poster == "N/A" ? "https://www.horizonplant.com/wp-content/uploads/2017/05/placeholder-400x400.png" :  movie.Poster} id={movie.imdbID}></img>
      <h1 className='absolute text-xl font-semibold text-white bottom-0 bg-slate-700 w-full h-[90px] flex justify-center items-center p-2' id={movie.imdbID}>{movie.Title}</h1>
    </div>
  )
}

export default Card;