import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Ensure you import the carousel styles
import IntResCard from '../../IntermediateResult/IntResCard';

import './CarouselShows.css';

const IntResShows = ({ results }) => {
    results = results ?? {};
    const showResults = Array.isArray(results?.show) ? results.show : [];

    // Function to chunk array into smaller arrays of specified size
    const chunkArray = (array, size) => {
        const chunkedArr = [];
        for (let i = 0; i < array.length; i += size) {
            chunkedArr.push(array.slice(i, i + size));
        }
        return chunkedArr;
    };

    // Chunk showResults into arrays of 4 shows each
    const chunkedShows = chunkArray(showResults, 4);

    return (
        <div className="container mx-auto text-center">
            {chunkedShows.length > 0 ? (
                <Carousel showThumbs={false} showStatus={false} infiniteLoop useKeyboardArrows>
                    {chunkedShows.map((showChunk, chunkIndex) => (
                        <div className="slide-container" key={chunkIndex}>
                            {showChunk.map((show, index) => (
                                <IntResCard key={index} movie={show} /> // Ensure each show has a unique key
                            ))}
                        </div>
                    ))}
                </Carousel>
            ) : (
                <p>No shows found</p>
            )}
        </div>
    );
};

export default IntResShows;
