import React from 'react';
import IntResCard from './IntResCard';

const IntRes = ({ results }) => {
  const movieResults = Array.isArray(results?.movie) ? results.movie : [];

  return (
    <div className="container mx-auto text-center">
      <ul className="mx-auto row text-center">
        {movieResults.length > 0 ? (
          movieResults.map((movie, index) => (
            <IntResCard key={index} movie={movie} /> // Ensure each movie has a unique key
          ))
        ) : (
          <p>No movies found</p>
        )}
      </ul>
    </div>
  );
};

export default IntRes;
