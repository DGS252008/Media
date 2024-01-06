import { React, useEffect, useState } from 'react';
import axios from 'axios';

import IntResCard from '../IntermediateResult/IntResCard';

const AllShows = () => {
    const [showTitle, setShowTitle] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const show = { title: showTitle };
            const res = await axios.get("http://localhost:5010/shows", {
                params: show
            });
            setShowTitle(res.data);
        }

        fetchData();
    }, []);

    return (
        <div className="container mx-auto text-center">
            <h1>Shows</h1>
            <ul className='mx-auto row text-center'>
                {showTitle.map((show) => {
                    return <IntResCard movie={show} />
                })}
            </ul>
        </div>
    );
}

export default AllShows;
