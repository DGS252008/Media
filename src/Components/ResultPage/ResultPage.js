import React from 'react';

import MediaResults from './SearchedCard/SearchedCard';
import RecTitle from './Recs/RecTitle/RecTitle';
import NavBar from '../NavBar/NavBar';
import SearchedCard from './SearchedCard/SearchedCard';

const ResultPage = ({ moviesByTitle, search }) => {
    return (
        <div className='container mx-auto'>
            {moviesByTitle.length === 0 && search && <p className='text-red-500'>Sorry, no such movie found. :( </p>}
            {console.log(moviesByTitle)}
            {moviesByTitle.length > 0 &&
                moviesByTitle.map((movie) => {
                    console.log(movie);
                    return (
                        <>
                            <SearchedCard key={movie.title} movie={movie} />
                            <RecTitle />
                        </>
                    )
                })
            }
        </div>
    )
}

export default ResultPage;