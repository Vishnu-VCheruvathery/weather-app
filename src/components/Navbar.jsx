import React from 'react';
import './Navbar.css'


function Navbar(props) {
    return (
        <div className='navbar'>
        <img className='sun' src={'/sun.png'}></img>
            <h1 className='title'>Weather App</h1>
        </div>
    );
}

export default Navbar;