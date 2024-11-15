import React, { useContext } from 'react';
import { AppContext } from './UseContext';
// const Username = ({ username }) => {
const Username = () => {

    const {username} = useContext(AppContext)
    return (
        <div>
            <h3>Username: {username}</h3>
        </div>
    );
};

export default Username;
