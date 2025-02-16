import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [names, setNames] = useState([])

  useEffect(() => {
    axios.get('/api/names') 
      .then((response) => {
      setNames(response.data)
    })
    .catch((error) => {
      console.log(error);
      
    })
  })


  return (
    <>
     <h1>Hi welcome to New Chapter</h1>
     <p>NAMES: {names.length}</p>

     {
      names.map((name, index) => (
        <div key={name.id}>
          <h3>{name.name}</h3>
          <p>{name.data}</p>
        </div>
      ))
     }
    </>
  )
}

export default App
