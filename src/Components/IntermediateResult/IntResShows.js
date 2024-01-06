import React from 'react';
import { useState } from 'react';

import IntResCard from './IntResCard';

const IntResShows = ({ results }) => {
    results = results ?? {};

    return (
        <div className="container mx-auto text-center">
            <ul className='mx-auto row text-center'>
                {results.show && results.show.map((show) => {
                    return <IntResCard movie={show} />;
                })}
            </ul>
        </div>
    )
}

export default IntResShows;
