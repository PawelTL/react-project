import React, { useState, useEffect } from 'react'
import './App.css'
import Card from './Card.jsx';
import Popup from "./Popup.jsx"

// 6decdd3a
const API_URL = "https://www.omdbapi.com?apikey=6decdd3a";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("Superman");
  const loadMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setCurrentList([...data.Search])
    setMovies(data.Search);
  };
  useEffect(() => {
    loadMovies(searchTerm);
  }, []);



  const [clickedList, setClickedList] = useState([]);
  const [currentList, setCurrentList] = useState([]);
  const [isWon, setIsWon] = useState(false);
  const [isLost, setIsLost] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [popup, setPopup] = useState(true);

  useEffect(() => {
    shuffleCards();
  }, [currentScore])

  const handleCardClick = (e) => {
    if (!isLost && !isWon) {
      if (clickedList.includes(e.target.id)) {
        setIsLost(true)
        setClickedList([])
        setPopup(true)
      } else {
        let temp = [...clickedList, e.target.id];
        setClickedList([...temp])
        setCurrentScore(currentScore + 1)
        if (currentScore >= highScore) { setHighScore(currentScore + 1) }
        if (currentScore === movies.length - 1) {
          setIsWon(true);
          setClickedList([])
          setPopup(true)
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

  const handleResetButton = () => {
    setCurrentScore(0);
    setPopup(false);
    setIsLost(false);
    setIsWon(false);
    loadMovies(searchTerm);
  }

  return (
    <div className='w-screen min-h-[100vh] p-8 bg-slate-600'>
      <div className='flex mx-[15vw] w-[70vw] justify-between'>
        <h1 className='pb-8 text-4xl text-white'>Movie memory card game</h1>
        <span className='text-2xl text-white' onClick={handleCardClick}>Score: {currentScore} | Highest score: {highScore}</span>
      </div>
      <div className='flex justify-evenly flex-wrap flex-auto gap-4 w-[75vw] mx-auto'>
        {movies.length > 0 ? movies.map((movie) => (
          <Card movie={movie} handleClick={handleCardClick} key={movie.imdbID} />
        )) : <h1 className='text-4xl text-white'>No Movies Found</h1>}
      </div>
      <Popup setSearchTerm={setSearchTerm} active={popup} win={isWon} loss={isLost} handleResetButton={handleResetButton} />
    </div>
  )
}
export default App
