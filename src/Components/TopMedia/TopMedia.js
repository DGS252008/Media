import React from 'react';

import './TopMedia.css';

const TopMedia = () => {
    return (
        <div className='TopMedia'>
            <div className='books'>
                <h2 className='font-weight-normal py-3'>Popular Books</h2>
                <div className='mediaPlaceHolder'></div>
            </div>
            <div className="movies">
                <h2 className='font-weight-normal py-3'>Popular Movies</h2>
                <div className='mediaPlaceHolder'></div>
            </div>
            <div className="shows">
                <h2 className='font-weight-normal py-3'>Popular Shows</h2>
                <div className='mediaPlaceHolder'></div>
            </div>
        </div>
    )
}

export default TopMedia;
