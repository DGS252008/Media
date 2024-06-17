import React, { useEffect, useState } from 'react';
import axios from 'axios';
import IntResCard from '../IntermediateResult/IntResCard';

const AllMovies = () => {
    const [movieTitle, setMovieTitle] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [moviesPerPage] = useState(36); // Change this value as needed

    useEffect(() => {
        const fetchData = async () => {
            // Calculate the start and end indexes of the movies to fetch
            const startIndex = (currentPage - 1) * moviesPerPage;
            const endIndex = currentPage * moviesPerPage;

            // Fetch data from the API
            const res = await axios.get("http://localhost:5010/movies");
            const allMovies = res.data;

            // Slice the data to get only the movies for the current page
            const moviesForPage = allMovies.slice(startIndex, endIndex);

            setMovieTitle(moviesForPage);

            // Scroll to the top
            window.scrollTo(0, 0);
        }

        fetchData();
    }, [currentPage, moviesPerPage]);

    // Pagination Functions
    const nextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };

    return (
        <div className="container mx-auto text-center">
            <h1>Movies</h1>
            <ul className='mx-auto row text-center'>
                {movieTitle.map((movie) => {
                    return <IntResCard key={movie.id} movie={movie} />
                })}
            </ul>
            <div>
                {currentPage > 1 && <button onClick={prevPage} className='btn m-1 text-white'>Previous Page</button>}
                {movieTitle.length === moviesPerPage && <button onClick={nextPage} className='btn m-1 text-white'>Next Page</button>}
            </div>
        </div>
    );
}

export default AllMovies;
