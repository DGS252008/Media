import React from 'react';
import { useNavigate } from 'react-router-dom';

const IntResCardBook = ({ book }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/results/book/${book._id}`, { state: { book } });
    };

    return (
        <div className="card bg-black text-center mx-auto mb-3" style={{ width: '18rem' }}>
            <a onClick={handleClick}>
                <img className='card-img-top mx-auto w-50 rounded' src={book.img} alt={book.title} />
                <div className="card-body">
                    <h6 className='card-title text-white'>{book.title}</h6>
                </div>
            </a>
        </div>
    );
};

export default IntResCardBook;
