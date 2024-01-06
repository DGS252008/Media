import {React, useEffect, useState} from 'react';
import axios from 'axios';

import IntResCard from '../IntermediateResult/IntResCard';

const AllMovies = () => {
    const [movieTitle, setMovieTitle] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const movie = { title: movieTitle };
            const res = await axios.get("http://localhost:5010/movies", {
                params: movie
            });
            setMovieTitle(res.data); 
        }

        fetchData();
    }, []);

    return (
        <div className="container mx-auto text-center">
            <h1>Movies</h1>
            <ul className='mx-auto row text-center'>
                {movieTitle.map((movie) => {
                    return <IntResCard movie={movie} />
                })}
            </ul>
        </div>
    );
}

export default AllMovies;
