import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Ensure you import the carousel styles
import IntResCard from '../../IntermediateResult/IntResCard';

import './CarouselMovies.css';

const CarouselMovies = ({ results }) => {
    const movieResults = Array.isArray(results?.movie) ? results.movie : [];
    console.log(results);

    // Function to chunk array into smaller arrays of specified size
    const chunkArray = (array, size) => {
        const chunkedArr = [];
        for (let i = 0; i < array.length; i += size) {
            chunkedArr.push(array.slice(i, i + size));
        }
        return chunkedArr;
    };

    // Chunk movieResults into arrays of 4 movies each
    const chunkedMovies = chunkArray(movieResults, 4);

    return (
        <div className="container mx-auto text-center">
            {chunkedMovies.length > 0 ? (
                <Carousel showThumbs={false} showStatus={false} infiniteLoop useKeyboardArrows>
                    {chunkedMovies.map((movieChunk, chunkIndex) => (
                        <div className="slide-container" key={chunkIndex}>
                            {movieChunk.map((movie, index) => (
                                <IntResCard key={index} movie={movie} /> // Ensure each movie has a unique key
                            ))}
                        </div>
                    ))}
                </Carousel>
            ) : (
                <p>No movies found</p>
            )}
        </div>
    );
};

export default CarouselMovies;
