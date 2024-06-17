import React from 'react';
import { format, isValid, parseISO } from 'date-fns';

const MainInfo = ({ movie }) => {
    // Parse the string to a Date object
    const releaseDateObject = parseISO(movie.released);

    if (!(releaseDateObject instanceof Date) || !isValid(releaseDateObject)) {
        console.warn(`Invalid or missing date: ${movie.released}`);
    }

    const releaseDate = releaseDateObject instanceof Date && isValid(releaseDateObject)
        ? format(releaseDateObject, 'MM/dd/yyyy')
        : 'Release date not available';

    return (
        <div id='mediaInfo' className="mx-auto row">
            <div className="col-md-auto">
                <dl className='row mx-auto'>
                    <dt id='info' className='list-inline-item'>
                        Title:
                    </dt>
                    <dd className='list-inline-item'>
                        {movie.title}
                    </dd>
                    <dt id='info' className='list-inline-item'>
                        Release:
                    </dt>
                    <dd>
                        {releaseDate}
                    </dd>
                </dl>
            </div>

            <div className="col-md-auto">
                <dl className='row mx-auto'>
                    <dt id='info' className='list-inline-item'>
                        Rating:
                    </dt>
                    <dd>
                        {movie.rating}
                    </dd>
                    <dt id='info' className='list-inline-item'>
                        Runtime:
                    </dt>
                    <dd>
                        {movie.duration}
                    </dd>
                </dl>
            </div>
        </div>
    );
};

export default MainInfo;
