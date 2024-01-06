import {React, useState} from 'react';

import IntRes from './IntRes';
import IntResShows from './IntResShows';
import IntResBooks from './IntResBooks';

const IntAllRes = ({ results }) => {
    const [showMedia, setShowMedia] = useState(0);

    const onClickOne = () => {
        setShowMedia(0);
    }
    const onClickTwo = () => {
        setShowMedia(1);
    }
    const onClickThree = () => {
        setShowMedia(2);
    }

    return (
        <div>
            <ul className='nav nav-pills pb-3 justify-content-center'>
                <li className="nav-item">
                    <button className='btn nav-link bg-black active' onClick={onClickOne}>Movies</button>
                </li>
                <li className="nav-item">
                    <button className='btn nav-link bg-black active' onClick={onClickTwo}>Shows</button>
                </li>
                <li className="nav-item">
                    <button className='btn nav-link bg-black active' onClick={onClickThree}>Books</button>
                </li>
            </ul>
            <div>
                {showMedia === 0 ? (
                    <IntRes results={results} />
                ) : showMedia === 1 ? (
                    <IntResShows results={results} />
                ) : (
                    <IntResBooks results={results}/>
                )}
            </div>
        </div>
    )
}

export default IntAllRes
