import React from 'react';

import './RecTitle.css';

const RecTitle = () => {
    return (
        <div className="container mx-auto">
            <div id='rec' className='card mx-auto p-2'>
                <h2 className='mx-auto'>Recomendations</h2>
            </div>
            <div id='recTitleContainer' className="row mx-auto">
                <div id='recTitle' className="col card mx-auto">
                    <h3 className='font-weight-light'>Books</h3>
                </div>
                <div id='recTitle' className="col card mx-auto">
                    <h3 className='font-weight-light'>Movies</h3>
                </div>
                <div id='recTitle' className="col card mx-auto">
                    <h3 className='font-weight-light'>Shows</h3>
                </div>
            </div>
        </div>
    );
}

export default RecTitle;
