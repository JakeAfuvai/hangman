import React, { useContext } from "react"
import { Context } from "./ContextProvider"
import Alphabet from "./Alphabet"
import "./App.css"

const App = () => {
    const { answers, guesses, setGuesses, currentAnswer, setAnswer } = useContext(Context)
    
    //***
    const spaces = currentAnswer.split("")
    //***
    const correctGuesses = guesses.map(guess => spaces.includes(guess) || spaces.includes(guess.toUpperCase()) ? guess : false).filter(element => element)
    console.log(guesses)
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
            <Alphabet spaces={spaces}/>
        </div>
    )
}

export default App