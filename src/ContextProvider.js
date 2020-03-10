import React, { useState } from "react"
import { words } from "./words"
const Context = React.createContext()


const ContextProvider = props => {
    const [ answers, setAnswers ] = useState(words)
    const [ currentAnswer, setCurrentAnswer ] = useState("")

    const getRandomInt = max => {
        return Math.floor(Math.random() * Math.floor(max));
    }

    const setAnswer = () => {
        const filteredArr = answers.filter(answer => !answer.solved)
        const number = getRandomInt(filteredArr.length)  
        setCurrentAnswer(answers[number].word)
    }

    return (
        <Context.Provider value={{answers, currentAnswer, setAnswer}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}