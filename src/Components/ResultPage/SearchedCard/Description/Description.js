import React from 'react';

const Description = ({ movie }) => {
    return (
        <div id='descriptionContainer' className="row">
            <dl className='container'>
                <dt id='info' className='list-inline-item'>
                    Description:
                </dt>
                <dd>
                    {movie.description}
                </dd>
            </dl>
        </div>
    )
}

export default Description
