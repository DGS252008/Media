import React from 'react';

import './MainInfo.css';

const MainInfo = ({movie}) => {
  return (
      <div id='mediaInfo' className="row">
          <div className="col">
              <dl  className='row mx-auto'>
                  <dt id='info' className='list-inline-item'>
                      Title:
                  </dt>
                  <dd className='list-inline-item w-100'>
                      {movie.title}
                  </dd>
                  <dt id='info' className='list-inline-item'>
                      Director:
                  </dt>
                  <dd className='list-inline-item'>
                      {movie.director}
                  </dd>
                  <dt id='info' className='list-inline-item'>
                      Release:
                  </dt>
                  <dd>
                      {movie.release_year}
                  </dd>
              </dl>
          </div>
          
          <div className="col">
              <dl className='row mx-auto'>
                  <dt id='info' className='list-inline-item'>
                      Rating:
                  </dt>
                  <dd>
                      {movie.rating}
                  </dd>
                  <dt id='info' className='list-inline-item'>
                      Runtime:
                  </dt>
                  <dd>
                      {movie.runtime}
                  </dd>
              </dl>
          </div>
      </div>
  )
}

export default MainInfo
