import React, { useCallback, useState } from 'react'
import Child from './Child'
//It is extremely similar to the usememo hook, it used to memorize a function so that it doesn't get recreated on every render.

const UseCallback = () => {
    const [toggle, setToggle] = useState(false)
    const [data,] = useState("Welcome to the webpage!")

    const returnComment = useCallback( 
        (name) => {
            return data + name;
        },
        [data] //An array of values that the callback depends on. The function is re-created only when one of these values changes.
    )
  return (
    <div>UseCallback
        <center>
            <div>
                <Child returnComment={returnComment}/>
                <button
                onClick={()=>{
                    setToggle(!toggle)
                }}>
                    Toggle
                </button>
                {toggle && <h1> Toggle </h1>}
            </div>
        </center>
    </div>
  )
}

export default UseCallback