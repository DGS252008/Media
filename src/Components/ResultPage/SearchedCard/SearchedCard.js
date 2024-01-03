import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import poster from '../Recs/theMenu.jpg';
import MainInfo from './MainInfo/MainInfo';
import Description from './Description/Description';

const SearchedCard = ({ movie }) => {
    return (
        <div id='MediaResults' className="container ">
            <div id='grid' className='' style={{ 'background-image': "url(poster)" }}>
                <div id='mediaGrid' className="row">
                    <div id='img' className='col-md-2'>
                        <img src={poster} alt='poster' className='img-fluid mx-auto rounded-2' />
                    </div>
                    <div className='col-md-8'>
                        <div className="row"><MainInfo movie={movie} /></div>
                        <div className="row"><hr id='lineBreak'></hr></div>
                        <div className="row pl-3"><Description movie={movie} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchedCard;
