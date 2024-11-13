import React, { useRef } from 'react' // useRef is basically the easiest way to access and manipulate dom elements

const UseRef = () => {
  // In the case of Vanilla JavaScript which is javaScript with out react or any other library slash framework we do like 
  // document.getElementById
  // in react you don't do any thing 

  const inputRef = useRef(null) // To access the dom elements we use useRef function

  const onClick =() =>{
    console.log(inputRef.current.value); //it console the input value
    inputRef.current.focus() // it helps to focus whenever you click the button
    inputRef.current.value = "" // Whenever you click the button clear the input  
  }
  return (
    <div>UseRef
      <center>
      <h1>Kamalesh</h1>
      <input type='text' placeholder='Try...' ref={inputRef}/> {/* To access the input value we use ref={}*/ }
      <button onClick={onClick}>Change Name</button>
    </center>
    </div>
  )
}

export default UseRef