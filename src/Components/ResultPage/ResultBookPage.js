// ResultPage.js
import React from 'react';
import SearchedBookCard from './SearchedCard/SearchedBookCard';
import RecTitle from './Recs/RecTitle/RecTitle';
import { useLocation, useParams } from 'react-router-dom';

const ResultPage = () => {
    const { cardId } = useParams();

    const location = useLocation();
    const { book } = location.state || {};

    console.log(book);

    const { img, title, published, rating, description, author } = book || {};

    return (
        <div className='container mx-auto'>
            {title && (
                <React.Fragment key={title}>
                    <SearchedBookCard book={{ img, title, published, rating, description, author }} />
                    <RecTitle movie={book}/>
                </React.Fragment>
            )}
        </div>
    );
};

export default ResultPage;
