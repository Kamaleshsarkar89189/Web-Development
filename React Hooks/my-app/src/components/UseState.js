import React, { useState } from 'react'

export const UseState = () => {
    // let counter = 0; // In simple JavaScript we declear the value as 0 
    const [counter, setCounter] = useState(0) // use of react hooks, 0 is initilez as first value, we can use another value. Here counter is the initial value and setCounter it the new value of the counter variable

    const increment = () => {
        // counter = counter + 1;  // the function to increment by one 
        // console.log(counter);
        setCounter(counter + 1) // incrementing by one

    }
    //Another example of useState

    const [inputValue, setInputValue] = useState("Kamalesh")
    let onChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue)
    }
    return (
        <div>
            <div>
                <h1>
                    <center>
                        {counter}
                        <button onClick={increment}>Increment</button>
                        <div>
                            <div>
                                <input placeholder='Enter something...' onChange={onChange} />
                                <br></br>
                                {inputValue}
                            </div>
                        </div>
                    </center>
                </h1>
            </div>
        </div>
    )
}