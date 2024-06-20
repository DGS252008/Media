import React from 'react';
import IntRes from '../../IntermediateResult/IntRes';
import CarouselMovies from './CarouselMovies';

const TopMovies = ({ movie }) => {
    console.log("Movie " + movie);

    return (
        <div id='movies' className='mx-auto carousel slide'>
            <h2 className='font-weight-normal'>Popular Movies</h2>
            <div id='mediaPlaceHolder' className='carousel-inner'>
                <div className="carousel-item active">
                    {/* <IntRes results={movie} /> */}
                    <CarouselMovies results={movie} />
                </div>
            </div>
        </div>
    )
}

export default TopMovies