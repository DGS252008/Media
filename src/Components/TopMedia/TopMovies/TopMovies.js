import React from 'react';

import { BsStarFill, BsStarHalf } from 'react-icons/bs';

import './TopMovies.css';

import poster from './theMenu.jpg';

const TopMovies = () => {
    return (
        <div id="movies" className='mx-auto'>
            <h2 className='font-weight-normal'>Popular Movies</h2>
            <div id='mediaPlaceHolder'>
                <div id='topCard' className="card bg-black">
                    <img className='card-img-top' src={poster} alt="Card image cap" />
                    <div className="container p-1">
                        <div className="mx-auto row">
                            <h6 className="card-title font-weight-light text-center">The Menu</h6>
                        </div>
                        <div className='mx-auto row'>
                            <p id='textContainer' className='col'>7.2</p>
                            <p id='textContainer' className="col">2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopMovies
