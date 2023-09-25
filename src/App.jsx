import React, { useState, useEffect } from 'react'
import { Link, Navigate, useLocation } from 'react-router-dom';
import './App.css'
import Card from './Card.jsx';
import transition from './Transition';

// 6decdd3a
const API_URL = "https://www.omdbapi.com?apikey=6decdd3a";

function App() {
  const { state } = useLocation();
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState(state.search ? state.search : "batman");
  const loadMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setCurrentList([...data.Search])
    setMovies(data.Search);
  };
  useEffect(() => {
    loadMovies(searchTerm);
    setHighScore(state.highScore)
  }, []);



  const [clickedList, setClickedList] = useState([]);
  const [currentList, setCurrentList] = useState([]);
  const [isWon, setIsWon] = useState(false);
  const [isLost, setIsLost] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    shuffleCards();
  }, [currentScore])

  const handleCardClick = (e) => {
    if (!isLost && !isWon) {
      if (clickedList.includes(e.target.id)) {
        setIsLost(true)
        setClickedList([])
      } else {
        let temp = [...clickedList, e.target.id];
        setClickedList([...temp])
        setCurrentScore(currentScore + 1)
        if (currentScore >= highScore) { setHighScore(currentScore + 1) }
        if (currentScore === movies.length - 1) {
          setIsWon(true);
          setClickedList([])
        }
      }
    }
  }

  const shuffleCards = () => {
    let tempArray = [...currentList];
    for (let i = tempArray.length - 1; i > 0; i--) {
      let random = Math.floor(Math.random() * tempArray.length);
      let temp = tempArray[i];
      tempArray[i] = tempArray[random];
      tempArray[random] = temp;
    }
    setMovies([...tempArray])

  }

  return (
    <div className='w-screen min-h-[100vh] p-8 bg-slate-600'>
      <div className='flex mx-[15vw] w-[70vw] justify-between'>
        <h1 className='pb-8 text-4xl text-white'>Movie memory card game -</h1><span className='font-semibold text-xl text-white w-[20vw]'> Click every card once.<br/> Be careful, they shuffle with every click.</span>
        <span className='text-2xl text-white'>Score: {currentScore} | Highest score: {highScore}</span>
      </div>
      <div className='flex justify-evenly flex-wrap flex-auto gap-4 w-[75vw] mx-auto'>
        {movies.length > 0 ? movies.map((movie) => (
          <Card movie={movie} handleClick={handleCardClick} key={movie.imdbID} />
        )) : <div className='flex flex-wrap justify-center'><h1 className='w-full m-20 text-5xl text-center text-white'>No Movies Found</h1>
          <Link to={"/"} state={[isWon, isLost, highScore]}>
             <button type='button' className='border-2 border-black  bg-slate-100 w-[15vw] h-[6vw] text-5xl font-semibold'>Go back</button>
          </Link></div>}
      </div>
      {isWon || isLost ? <Navigate to={"/"} state={[isWon, isLost, highScore]} /> : null}
    </div>

  )
}
export default transition(App)
