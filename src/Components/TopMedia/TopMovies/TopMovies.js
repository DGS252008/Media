import React from 'react';
import IntRes from '../../IntermediateResult/IntRes';

const TopMovies = ({ movie }) => {
    console.log("Movie " + movie);

    return (
        <div id='movies' className='mx-auto'>
            <h2 className='font-weight-normal'>Popular Movies</h2>
            <div id='mediaPlaceHolder'>
                <IntRes results = { movie } />
            </div>
        </div>
    )
}

export default TopMovies
