import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import './SearchedCard.css';

import MainInfo from './MainInfo/MainInfo';
import Description from './Description/Description';

const SearchedCard = ({ movie }) => {
    return (
        <div id='MediaResults' className="container">
            <div id='grid' className='col-md-auto pb-5'>
                <div id='mediaGrid' className="row justify-content-center">
                    <div id='img' className='col-md-auto'>
                        <img src={movie.img} alt='poster' className='ratio ratio-4-3 rounded-4' />
                    </div>
                    <div className='col-sm-9'>
                        <div className="row"><MainInfo movie={movie} /></div>
                        <div className="row"><Description media={movie} /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchedCard;
