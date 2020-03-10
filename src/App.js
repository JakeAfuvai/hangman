import React, { useContext } from "react"
import { Context } from "./ContextProvider"
import "./App.css"

const App = () => {
    const { answers, currentAnswer, setAnswer } = useContext(Context)
    
    //***
    const spaces = currentAnswer.split("")
    //***
    const guesses = ["o", "t", "z"]
    const correctGuesses = guesses.map(guess => spaces.includes(guess) || spaces.includes(guess.toUpperCase()) ? guess : false).filter(element => element)
    console.log(correctGuesses)
    //***
    const spaceArr = spaces.map((space, i) => <div className="space" style={ space === " " ? {background: "rgba(0,0,0,0.1)", border: "none"} : correctGuesses.includes(space) || correctGuesses.includes(space.toLowerCase()) ? {background: "limeGreen", color: "rgba(0,0,0,0.5)"} : {background: "none"}} key={space + i} >{correctGuesses.includes(space) || correctGuesses.includes(space.toLowerCase()) ? space : ""}</div>)

    return (
        <div className="app-container"> 
            <div 
                className="current-answer-container" 
                style={{
                    display: "flex",
                }}
            >
                {spaceArr}
            </div>
            <button onClick={() => setAnswer()}>start</button>
        </div>
    )
}

export default App