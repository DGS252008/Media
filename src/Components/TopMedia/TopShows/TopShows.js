import React from 'react';
import IntResShows from '../../IntermediateResult/IntResShows';


const TopShows = ({ show }) => {
  console.log(show);

  return (
    <div className="shows">
      <h2 className='font-weight-normal py-3'>Popular Shows</h2>
      <div className='mediaPlaceHolder'>
        <IntResShows results={show} />
      </div>
    </div>
  )
}

export default TopShows
