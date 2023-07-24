import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import './SearchedCard.css';

import poster from '../Recs/theMenu.jpg';
import MainInfo from './MainInfo/MainInfo';
import Description from './Description/Description';

const SearchedCard = ({ movie }) => {
    return (
        <div id='MediaResults' className="container mx-auto pb-4">
            <div id='grid' className=' mx-auto p-5'>
                <div id='mediaGrid' className="mx-auto">
                    <div id='img'>
                        <img src={poster} alt='poster' className='img-fluid mx-auto rounded-2' />
                    </div>
                    <div className='container'>
                        <MainInfo movie={movie} />
                        <hr id='lineBreak'></hr>
                    </div>
                </div>
                <Description movie={movie} />
            </div>
        </div>
    )
}

export default SearchedCard;
