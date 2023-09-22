import React, { useState, useEffect } from 'react'

function Popup({ active, win, loss, handleResetButton, setSearchTerm }) {



    return (
        <>
            {active ? <>
                <div className='w-[80vw] md:w-[60vw] h-[70vh] bg-slate-200 opacity-95 mx-[5vw] md:mx-[20vw] absolute top-[15vh] justify-center blur-md'></div>
                <h2 className='absolute mx-[20vw] z-50 top-[22vh] text-center text-black font-semibold text-5xl md:text-8xl w-[60vw]'>{win ? "You win!" : loss ? "You lose!" : "Error, something went wrong"}</h2>
                <div className='absolute top-[40vh] text-xl md:text-2xl mx-[10vw] md:mx-[25vw] flex flex-wrap justify-center '> <label className='px-4'>What movies would you like to see next?</label><input className='border-2 border-zinc-700' onChange={(e) => setSearchTerm(e.target.value)} type='text' /></div>
                <button type='button' onClick={handleResetButton} className='hover:bg-slate-800 duration-300 hover:scale-105 absolute md:top-[50vh] mx-[32.5vw] top-[60vh] md:mx-[40vw] w-[35vw] h-[14vw] bg-slate-700 md:w-[20vw] md:h-[8vw] text-white rounded-3xl border-4 border-black text-2xl md:text-4xl font-bold'>Try Again</button>
            </> : null
            }

        </>
    )
}

export default Popup