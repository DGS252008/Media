import React from 'react';
import { useState } from 'react';

import IntResCard from './IntResCard';

const IntRes = ({ results }) => {
  results = results ?? {};

  return (
    <div className="container mx-auto text-center">
      <ul className='mx-auto row text-center'>
        {results.movie && results.movie.map((movie) => {
          return <IntResCard movie={movie} />;
        })}
      </ul>
    </div>
  );
};

export default IntRes;
