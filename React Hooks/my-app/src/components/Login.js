import React, { useContext } from 'react';
import { AppContext } from './UseContext';
//Using props
// const Login = ({ setUsername }) => { 
//  Without using props
const Login = () => {

    const { setUsername } = useContext(AppContext)
    return (
        <div>
            <input
                placeholder="Enter your username"
                onChange={(event) => setUsername(event.target.value)}
            />
        </div>
    );
};

export default Login;
