import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import poster from '../Recs/theMenu.jpg';
import MainInfo from './MainInfo/MainInfo';
import Description from './Description/Description';

const SearchedCard = ({ movie }) => {
    return (
        <div id='MediaResults' className="">
            <div id='grid' className='p-5'>
                <div id='mediaGrid' className="row justify-content-center">
                    <div id='img' className='col-md-2'>
                        <img src={movie.img} alt='poster' className='img-fluid mx-auto rounded-2' />
                    </div>
                    <div className='col-sm-9'>
                        <div className="row"><MainInfo movie={movie} /></div>
                        <div className="row pl-3"><Description media={movie} /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchedCard;
