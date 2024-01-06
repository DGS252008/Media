import React from 'react';
import { format, isValid, parseISO } from 'date-fns';

const MainInfo = ({ book }) => {
    // Parse the string to a Date object
    const releaseDateObject = parseISO(book.published);

    if (!(releaseDateObject instanceof Date) || !isValid(releaseDateObject)) {
        console.warn(`Invalid or missing date: ${book.published}`);
    }

    const releaseDate = releaseDateObject instanceof Date && isValid(releaseDateObject)
        ? format(releaseDateObject, 'MM/dd/yyyy')
        : 'Release date not available';

    return (
        <div id='mediaInfo' className="mx-auto row">
            <div className="col-md-4">
                <dl className='row mx-auto'>
                    <dt id='info' className='list-inline-item'>
                        Title:
                    </dt>
                    <dd className='list-inline-item'>
                        {book.title}
                    </dd>
                    <dt id='info' className='list-inline-item'>
                        Published:
                    </dt>
                    <dd>
                        {releaseDate}
                    </dd>
                </dl>
            </div>

            <div className="col-md-4">
                <dl className='row mx-auto'>
                    <dt id='info' className='list-inline-item'>
                        Rating:
                    </dt>
                    <dd>
                        {book.rating}
                    </dd>
                    <dt id='info' className='list-inline-item'>
                        Author:
                    </dt>
                    <dd>
                        {book.author}
                    </dd>
                </dl>
            </div>
        </div>
    );
};

export default MainInfo;
