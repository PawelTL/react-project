import {React, useState} from 'react'
import { useLocation, Link } from 'react-router-dom';

function Welcome() {

    let { state } = useLocation();
    if (state === null) {state = [false, false, 0]}
    const [ search, setSearch ] = useState("");

    const handleInput = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className='flex justify-center w-screen h-screen p-16 bg-slate-700'>
            <h1 className='font-semibold text-white text-8xl'>{state[0] ? "You Win!" : state[1] ? "You Lose!" : "Welcome"}</h1>
            <div className='absolute top-[40vh] text-xl md:text-2xl mx-[10vw] md:mx-[25vw] flex flex-wrap justify-center '>
                <label className='px-4 text-white'>What movies would you like to see next?</label>
                <input className='border-2 border-zinc-700' onChange={handleInput} value={search} type='text' placeholder='ex: batman'/>
                <Link to={"/game"} state={{search: search, highScore: state[2]}}><div className='bg-slate-400 m-20 border-2 border-black w-[20vw] h-[8vw] rounded-3xl text-5xl flex justify-center items-center font-bold'>{state ? "Try again" : "Begin"}</div></Link>
            </div>
        </div>
    )
}

export default Welcome;