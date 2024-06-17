import React, { useEffect, useState } from 'react';
import axios from 'axios';
import IntResCard from '../IntermediateResult/IntResCard';

const AllShows = () => {
    const [showTitle, setShowTitle] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [showsPerPage] = useState(36); // Change this value as needed

    useEffect(() => {
        const fetchData = async () => {
            // Calculate the start and end indexes of the shows to fetch
            const startIndex = (currentPage - 1) * showsPerPage;
            const endIndex = currentPage * showsPerPage;

            // Fetch data from the API
            const res = await axios.get("http://localhost:5010/shows");
            const allShows = res.data;

            // Slice the data to get only the shows for the current page
            const showsForPage = allShows.slice(startIndex, endIndex);

            setShowTitle(showsForPage);

            // Scroll to the top
            window.scrollTo(0, 0);
        };

        fetchData();
    }, [currentPage, showsPerPage]);

    // Pagination Functions
    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    return (
        <div className="container mx-auto text-center">
            <h1>Shows</h1>
            <ul className='mx-auto row text-center'>
                {showTitle.map((show) => {
                    return <IntResCard key={show.id} movie={show} />
                })}
            </ul>
            <div>
                {currentPage > 1 && <button onClick={prevPage} className='btn m-1 text-white' >Previous Page</button>}
                {showTitle.length === showsPerPage && <button onClick={nextPage} className='btn m-1 text-white btn-outline-white'>Next Page</button>}
            </div>
        </div>
    );
};

export default AllShows;
