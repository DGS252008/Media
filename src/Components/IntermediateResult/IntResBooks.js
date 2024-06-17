import React from 'react';

import IntResCardBook from './IntResCardBook';

const IntResBooks = ({ results }) => {
    //console.log(results);


    return(
        <div className="container mx-auto text-center">
            <ul className='mx-auto row text-center'>
                {results.book && results.book.map((book) => {
                    return <IntResCardBook book={book} />;
                })}
            </ul>
        </div>
    )
}

export default IntResBooks
