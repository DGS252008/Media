import React from 'react';

import IntResBooks from '../../IntermediateResult/IntResBooks';

const TopBooks = ({ book }) => {
  return (
    <div className='books'>
      <h2 className='font-weight-normal py-3'>Popular Books</h2>
      <div className='mediaPlaceHolder'>
        {/* <IntResBooks results = { book } /> */}
      </div>
    </div>
  )
}

export default TopBooks
