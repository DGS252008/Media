import React from 'react';
import { useNavigate } from 'react-router-dom';

const IntResCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/results/${movie._id}`, { state: { movie } });
  };

  return (
    <div className="card bg-black text-center mx-auto mb-3" style={{ width: '18rem' }}>
      <a onClick={handleClick}>
        <img className='card-img-top mx-auto w-50 rounded' src={movie.img} alt={movie.title} />
        <div className="card-body">
          <h6 className='card-title text-white'>{movie.title}</h6>
        </div>
      </a>
    </div>
  );
};

export default IntResCard;
