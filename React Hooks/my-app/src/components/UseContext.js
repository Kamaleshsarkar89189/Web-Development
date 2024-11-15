import React, { createContext, useState } from 'react'
import Login from './Login'
import Username from './Username'
// Imagin that you a project where you have a component and in this case we created a component called UseContext and this component called two different component called Login & Username

export  const AppContext = createContext(null) // context is basically collection of states or a collection of information that you want to access throughout the whole tree components inside of the component that you are right now

const UseContext = () => {
    const [username, setUsername] = useState("")  
  return (
    <div>UseContext
        <center>
              <AppContext.Provider value={{ username, setUsername}}>  {/* Imagine that you have lot of states and you can't just be passing all of them through props, because it iis not maintainable to have that many props. One way you can do it is by using the context api, which allows you to manage your states very easily, because  with the context api we're not going to need props */}
                {/** using props */}
                {/* <Login setUsername={setUsername} /> <Username username={username}/>  */}
                {/* Without using props */}
                <Login  /> <Username /> 

              </AppContext.Provider>
        </center> 
    </div>
  )
}

export default UseContext