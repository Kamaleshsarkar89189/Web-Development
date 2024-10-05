import React, { useReducer, useState } from 'react'
// useReducer hook is similar to useState hook, it used for complex cases. If there is so many state that you have to perform then it basically used
const reducer = (state, action) => {
    switch (action.type) {
        case "Increment":
            return {counter: state.counter + 1, showText: state.showText}
        case "toggleShowText":
            return {counter: state.counter, showText: !state.showText}
        default:
            return state
    }
}

const UseReducer = () => {
    // const [counter, setCounter] = useState(0) //Multiple useState use 
    // const [showText, setShowText] = useState(true)

    // To overcome this we use useReducer hook

    const [state, dispatch ] = useReducer(reducer, { counter: 0, showText:true})
    return (
        <div>UseReducer
            <center>
            {/* <div><h1>{counter}</h1></div> */}
            <div><h1>{state.counter}</h1></div>
            <button onClick={() => {
                // setCounter(counter + 1);
                // setShowText(!showText);
                dispatch({ type: "Increment"})
                dispatch({ type: "toggleShowText"})
            }}>
                Click Here
            </button>
            {/* {showText && <p>This is a text</p>} */}
            {state.showText && <p>This is a text</p>}
            </center>
        </div>
    )
}

export default UseReducer