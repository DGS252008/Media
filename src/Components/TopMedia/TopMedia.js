import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './TopMedia.css';

import TopMovies from './TopMovies/TopMovies';
import TopShows from './TopShows/TopShows';
import TopBooks from './TopBooks/TopBooks';

const TopMedia = () => {
    const [topMedia, setTopMedia] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("http://localhost:5010/get_popular");
            console.log(res); // Add this line
            setTopMedia(res.data);
            console.log(res.data);
        }
        fetchData();
    }, []);

    console.log(topMedia);

    return (
        <div id='TopMedia' className='p-1 carousel-slide'>
            <div className="row">
                <div className="col">
                    <TopMovies movie={topMedia} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <TopShows show={topMedia} />
                </div>
            </div>
            <div className="row carousel-inner">
                <div className="col carousel-item active">
                    <TopBooks className="d-block" book={topMedia} />
                </div>
            </div>
        </div>
    )
}

export default TopMedia;
