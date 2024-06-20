import React from 'react';
import CarouselShows from './CarouselShows';


const TopShows = ({ show }) => {
  console.log(show);

  return (
    <div className="shows">
      <h2 className='font-weight-normal py-3'>Popular Shows</h2>
      <div className='mediaPlaceHolder'>
        <CarouselShows results={show} />
      </div>
    </div>
  )
}

export default TopShows
