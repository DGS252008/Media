import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import poster from '../Recs/theMenu.jpg';
import MainBookInfo from './MainInfo/MainBookInfo';
import Description from './Description/Description';

const SearchedCard = ({ book }) => {
    return (
        <div id='MediaResults' className="">
            <div id='grid' className='p-5'>
                <div id='mediaGrid' className="row justify-content-center">
                    <div id='img' className='col-md-2'>
                        <img src={book.img} alt='poster' className='img-fluid mx-auto rounded-2' />
                    </div>
                    <div className='col-sm-9'>
                        <div className="row"><MainBookInfo book={book} /></div>
                        <div className="row pl-3"><Description media={book} /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchedCard;
