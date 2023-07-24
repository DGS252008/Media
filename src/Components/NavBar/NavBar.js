import React from 'react';

import NavDrop from './NavDrop/NavDrop';

import './NavBar.css';

const NavBar = () => {
    return (
        <nav id='NavBar' className="navbar justify-content-between">
                <a href='/' className='w-25'>
                    <p id='homeBtn' className='btn w-25 text-uppercase'>Logo</p>
                </a>
                <div id='dropContainer'>
                    <NavDrop />
                </div>
        </nav>
    )
}

export default NavBar;
