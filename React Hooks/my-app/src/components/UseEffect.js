import React, { useEffect, useState } from 'react'
import axios from "axios" // very common library for API calls


const UseEffect = () => {  //useEffect hooks just a function that will be call whenever the page we re-renders
  const [data, setData] = useState("") //to display the data into the screen, first data initialize as empty string and setData will be initialized as what data you want to show in data
  const [count, setCount] = useState(0)

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email)
        console.log("Api was called");

      })
  }, [count]) // Here [] this is called empty dipendency array if you click on this button API will be called every single time the value of the count changes. It depends on your project what type of project you are doing 
  return (
    <div>UseEffect
      <div>
        <center>Hello
          <h1>{data}</h1>
          <h1>{count}</h1>
          <button
            onClick={() => {
              setCount(count + 1);
            }}>
            Click
            </button>

        </center>
      </div>

    </div>
  )
}

export default UseEffect