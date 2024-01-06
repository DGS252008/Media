import React from 'react';

import poster from './theMenu.jpg';

const TopCardMS = () => {
    return (
        <div id='topCard' className='card bg-dark p-1 pb-0'>
            <img className='card-img-top' src={poster} alt='Card image cap' />
            <div className='container p-1'>
                <div className='mx-auto row'>
                    <h6 className='col pb-2 card-title font-weight-light text-center'>The Menu</h6>
                </div>
                <div className="row">
                    <p id='textContainer' className='col text-center'>Rating: 7.2/10</p>
                </div>
                <div className="row">
                    <p id='textContainer' className='col text-center'>Release: 2022</p>
                </div>
            </div>
        </div>
    )
}

export default TopCardMS;
