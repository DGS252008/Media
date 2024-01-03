import React from 'react';

import './TopMedia.css';

import poster from '../ResultPage/Recs/theMenu.jpg'
import TopMovies from './TopMovies/TopMovies';
import TopShows from './TopShows/TopShows';
import TopBooks from './TopBooks/TopBooks';

const TopMedia = () => {
    return (
        <div id='TopMedia' className='p-1'>
            <div className="row">
                <div className="col">
                    <TopMovies />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <TopShows />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <TopBooks />
                </div>
            </div>
        </div>
    )
}

export default TopMedia;
