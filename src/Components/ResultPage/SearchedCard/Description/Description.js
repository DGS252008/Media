import React from 'react';

import './Description.css';

const Description = ({movie}) => {
  return (
      <div id='descriptionContainer' className="row">
          <dl className='container'>
              <dt id='info' className='list-inline-item'>
                  Description:
              </dt>
              <dd>
                  A young couple travels to a remote island to eat at an exclusive restaurant
                  where the chef has prepared a lavish menu,
                  with some shocking surprises.
              </dd>
          </dl>
      </div>
  )
}

export default Description
