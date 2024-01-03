import React from 'react';

import './RecTitle.css';

const RecTitle = () => {
    return (
        <div className="container mx-auto">
            <div id='rec' className='card bg-black mx-auto p-2'>
                <h2 className='text-center text-white'>Recomendations</h2>
            </div>
            <div id='recTitleContainer' className="mx-auto">
                <div id='recTitle' className="bg-black mx-auto">
                    <h3 className='font-weight-light text-white'>Movies</h3>
                </div>
                <div id='recTitle' className="bg-black mx-auto">
                    <h3 className='font-weight-light text-white'>Shows</h3>
                </div>
                <div id='recTitle' className="bg-black mx-auto">
                    <h3 className='font-weight-light text-white'>Books</h3>
                </div>
            </div>
        </div>
    );
}

export default RecTitle;
