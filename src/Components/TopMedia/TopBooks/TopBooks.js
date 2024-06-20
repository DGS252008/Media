import React from 'react';

import IntResBooks from '../../IntermediateResult/IntResBooks';

import CarouselBooks from './CarouselBooks';

const TopBooks = ({ book }) => {
  // console.log(book);


  return (
    <div className='books'>
      <h2 className='font-weight-normal py-3'>Popular Books</h2>
      <div className='mediaPlaceHolder'>
        <CarouselBooks results={book} />
      </div>
    </div>
  )
}

export default TopBooks
