import React, { useRef } from 'react'
import Button from './Button'
// UseImperativeHandle hook basically used for access the child component in parent component, here basically need useRef & forwardRef and useImperative function
const UseImperativeHandle = () => {
    const buttonRef = useRef(null)
  return (
    <div>UseImperativeHandle
        <center><div>
            <button onClick={() => {
                buttonRef.current.alterToggle();
            }}>Button From Parent</button>
            <Button ref={buttonRef}/>
        </div>
          </center>
    </div>
  )
}

export default UseImperativeHandle