import React, { useEffect } from 'react'

const Child = ({returnComment}) => {
    useEffect(() => {
      console.log("Function was called")
    }, [returnComment])
    
  return (
    <div>
        <center>
            <div>
                {returnComment("Kamalesh")}
            </div>
        </center>
    </div>
  )
}

export default Child