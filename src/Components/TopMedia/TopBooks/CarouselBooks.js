import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Ensure you import the carousel styles
import IntResCardBook from '../../IntermediateResult/IntResCardBook';

import './CarouselBooks.css'

const CarouselBooks = ({ results }) => {
    results = results ?? {};
    const bookResults = Array.isArray(results?.book) ? results.book : [];

    // Function to chunk array into smaller arrays of specified size
    const chunkArray = (array, size) => {
        const chunkedArr = [];
        for (let i = 0; i < array.length; i += size) {
            chunkedArr.push(array.slice(i, i + size));
        }
        return chunkedArr;
    };

    // Chunk bookResults into arrays of 4 books each
    const chunkedBooks = chunkArray(bookResults, 4);

    return (
        <div className="container mx-auto text-center">
            {chunkedBooks.length > 0 ? (
                <Carousel showThumbs={false} showStatus={false} infiniteLoop useKeyboardArrows>
                    {chunkedBooks.map((bookChunk, chunkIndex) => (
                        <div className="slide-container" key={chunkIndex}>
                            {bookChunk.map((book, index) => (
                                <IntResCardBook key={index} book={book} /> // Ensure each book has a unique key
                            ))}
                        </div>
                    ))}
                </Carousel>
            ) : (
                <p>No books found</p>
            )}
        </div>
    );
};

export default CarouselBooks;
