import React, { useState, useEffect } from 'react';
import axios from 'axios';

import IntRes from '../../../IntermediateResult/IntRes';
import IntResShows from '../../../IntermediateResult/IntResShows';
import IntResBooks from '../../../IntermediateResult/IntResBooks';

import './RecTitle.css';

const RecTitle = ({ movie }) => {
    const [recs, setRecs] = useState({ movie: [] });

    useEffect(() => {
        console.log("fetch");
        const fetchData = async () => {
            if (movie && movie.genres) {
                const show = { genres: movie.genres, limit: 4 };
                try {
                    const res = await axios.get("http://localhost:5010/recommendation", {
                        params: show
                    });
                    console.log("API response:", res.data); // Log the API response
                    console.log("Type of res.data:", typeof res.data); // Log the type of res.data
                    console.log("Is Array:", Array.isArray(res.data)); // Check if res.data is an array
                    setRecs({ movie: res.data });
                } catch (error) {
                    console.error("Error fetching recommendations:", error);
                }
            }
        }
        fetchData();
    }, [movie]);

    return (
        <div className="container mx-auto">
            <div id='rec' className='card bg-black mx-auto p-2'>
                <h2 className='text-center text-white'>Recommendations</h2>
            </div>
            <div id='recTitleContainer' className="mx-auto">
                <div id='recTitle' className="bg-black mx-auto">
                    <h3 className='font-weight-light text-white'>Movies</h3>
                    <IntRes results={recs} />
                </div>
                <div id='recTitle' className="bg-black mx-auto">
                    <h3 className='font-weight-light text-white'>Shows</h3>
                    <IntResShows results={recs} />
                </div>
                <div id='recTitle' className="bg-black mx-auto">
                    <h3 className='font-weight-light text-white'>Books</h3>
                    <IntResBooks results={recs} />
                </div>
            </div>
        </div>
    );
}

export default RecTitle;
