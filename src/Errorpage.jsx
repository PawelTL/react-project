import {React, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import transition from "./Transition";

function Errorpage () {
    const navigate = useNavigate();
    useEffect(() => {
      setTimeout(() => {
        navigate("/")
      }, 3000)
    }, [])
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen text-6xl font-semibold text-white bg-slate-700">
            <h1 className="m-10">Page not found</h1>
            <h1 className="m-10">Sending you to the welcome page</h1>
        </div>
    )
}

export default transition(Errorpage);