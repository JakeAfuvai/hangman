import React, { useState } from "react"
import { words } from "./words"
const Context = React.createContext()


const ContextProvider = props => {
    const [ answers, setAnswers ] = useState(words)
    const [ currentAnswer, setCurrentAnswer ] = useState("")
    const [ correctGuess, setCorrectGuess ] = useState([])
    const [ guesses, setGuesses ] = useState([])
    const [ currentGuess, setCurrentGuess ] = useState("")

    const getRandomInt = max => {
        return Math.floor(Math.random() * Math.floor(max));
    }

    const setAnswer = () => {
        const filteredArr = answers.filter(answer => !answer.solved)
        const number = getRandomInt(filteredArr.length)  
        setCurrentAnswer(answers[number].word)
    }

    const checkGuess = () => {
        setGuesses(prevState => {
            return [...prevState, currentGuess]
        })
        setCurrentGuess("")
    }

    return (
        <Context.Provider value={{
            answers, 
            guesses,
            currentAnswer, 
            currentGuess, 
            setAnswer, 
            setCurrentGuess,
            checkGuess
        }}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}