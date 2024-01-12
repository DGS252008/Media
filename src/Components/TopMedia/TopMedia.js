import {React, useEffect, useState} from 'react';
import axios from 'axios';

import './TopMedia.css';

import poster from '../ResultPage/Recs/theMenu.jpg'
import TopMovies from './TopMovies/TopMovies';
import TopShows from './TopShows/TopShows';
import TopBooks from './TopBooks/TopBooks';

const TopMedia = () => {
    const [topMedia, setTopMedia] = useState();

    useEffect(() => {
        const fetchData = async () => {
                const topMedia = { "limit": 4 };
                const res = await axios.get("http://localhost:5010/get_popular", {
                    params: topMedia
                });
                console.log(res.data); // Add this line
                setTopMedia(res.data);
        }
    })

    return (
        <div id='TopMedia' className='p-1'>
            <div className="row">
                <div className="col">
                    <TopMovies movie = { topMedia } />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <TopShows show={ topMedia } />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <TopBooks book={ topMedia } />
                </div>
            </div>
        </div>
    )
}

export default TopMedia;
