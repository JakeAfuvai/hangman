import React, { useContext } from "react"
import { Context } from "./ContextProvider"

const Alphabet = (props) => {
    const { currentGuess, setCurrentGuess, guesses, setGuesses, checkGuess } = useContext(Context)
    
    const correctGuesses = guesses.map(guess => props.spaces.includes(guess) || props.spaces.includes(guess.toUpperCase()) ? guess : false).filter(element => element)

    const incorrectGuesses = guesses.map(guess => props.spaces.includes(guess) || props.spaces.includes(guess.toUpperCase()) ? false : guess).filter(element => element)

    console.log(incorrectGuesses)

    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
    const guesserTable = alphabet.map(letter => {
        const style = currentGuess === letter ? {background: "rgba(0,0,0,0.2)", gridArea: `${letter}`} : correctGuesses.includes(letter) ? {background: "limeGreen", gridArea: `${letter}`} : incorrectGuesses.includes(letter) ? {background: "#faafaa", gridArea: `${letter}`} : {background: "none", gridArea: `${letter}`}
        return (
            <div
                key={letter}
            >
                <div 
                    key={letter} 
                    className={`alphabet ${letter}`} 
                    style={style}
                    onClick={() => setCurrentGuess(letter)}
                >
                    {letter}
                </div>
                {currentGuess !== "" && currentGuess === letter && <button onClick={() => checkGuess()}>guess</button>}
            </div>
        )    
        }
    )
    
    console.log(currentGuess)

    return (
        <div style={{display: "flex"}}>
            <div className="alphabet-container">
                {guesserTable}
            </div>
        </div>
    )
} 

export default Alphabet