import React from 'react';

import TopCard from '../TopCard/TopCardMS';

import './TopMovies.css';

const TopMovies = () => {
    return (
        <div id='movies' className='mx-auto'>
            <h2 className='font-weight-normal'>Popular Movies</h2>
            <div id='mediaPlaceHolder'>
                <TopCard />
            </div>
        </div>
    )
}

export default TopMovies
