import React, { useEffect, useLayoutEffect, useRef } from 'react'
// Use layout effect is similar to useEffect almost identical but there is a fundamental difference betqween both of them
const UseLayOutEffect = () => {
    const inputRef = useRef(null);
    useLayoutEffect(() => {
        console.log(inputRef.current.value);  // UseLayOutEffect always call before useEffect, 
    },[]);
// Before we change the value it should be KAMALESH, in cases where you want to change the layout of your application before it prints out to the user, it is mosty ui base, in a application you want to show some sort of data or some sort of funtion that you created
    useEffect(() => {
        inputRef.current.value = "Hello";     
    },[]);
  return (
    <div>UseLayOutEffect
        <div>
            <center>
                <input ref={inputRef} value={"KAMALESH"} style={{width: 400, height: 50}}/>
            </center>
        </div>
    </div>
  )
}

export default UseLayOutEffect