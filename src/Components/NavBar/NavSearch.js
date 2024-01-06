import React from 'react';

import NavDrop from './NavDrop/NavDrop';

import InputForm from '../SearchMain/InputForm/InputForm';

import './NavBar.css';

const NavSearch = ({ moviesByTitle, setMoviesByTitle, search, setSearch }) => {
    return (
        <nav id='NavBar' className="navbar justify-content-between">
            <a href='/' className='w-25'>
                <p id='homeBtn' className='btn w-25 text-uppercase'>Logo</p>
            </a>
            <div className="navbar justify-content-between">
                <div>
                    <InputForm
                        moviesByTitle={moviesByTitle}
                        search={search}
                        setMoviesByTitle={setMoviesByTitle}
                        setSearch={setSearch}
                    />
                </div>
                <div id='dropContainer'>
                    <NavDrop />
                </div>
            </div>
        </nav>
    )
}

export default NavSearch;
