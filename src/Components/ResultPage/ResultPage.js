// ResultPage.js
import React, { useEffect } from 'react';  // Correct import statement: React should be imported first

import axios from 'axios';

import SearchedCard from './SearchedCard/SearchedCard';
import RecTitle from './Recs/RecTitle/RecTitle';
import { useLocation, useParams } from 'react-router-dom';

const ResultPage = () => {
    const { cardId } = useParams();

    const location = useLocation();
    const { movie } = location.state || {};

    console.log(movie);

    const { img, title, released, rating, description, duration } = movie || {};

    return (
        <div className='container mx-auto'>
            {title && (
                <React.Fragment key={title}>
                    <SearchedCard movie={{ img, title, released, rating, description, duration }} />
                    <RecTitle movie={movie} />
                </React.Fragment>
            )}
        </div>
    );
};

export default ResultPage;
