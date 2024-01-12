import React from 'react';

const TopMovies = ({ movie }) => {
    return (
        <div id='movies' className='mx-auto'>
            <h2 className='font-weight-normal'>Popular Movies</h2>
            <div id='mediaPlaceHolder'>
            </div>
        </div>
    )
}

export default TopMovies
