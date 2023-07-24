import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import axios from 'axios';

import './InputForm.css';

const InputForm = ({ moviesByTitle, setMoviesByTitle, search, setSearch }) => {
    const [movieTitle, setMovieTitle] = useState([]);
    const navigate = useNavigate();


    async function handleSubmit(e) {
        e.preventDefault();
        const movie = { title: movieTitle };
        const res = await axios.post("http://localhost:5010/search_movie_title", { title: movieTitle });
        console.log(res.data);
        // if (typeof res.data === 'object' && !Array.isArray(res.data) && res.data !== null) {
        //     res.data = Object.entries(res.data);
        //     console.log(res.data);
        // }
        const arr = [res.data];
        setMoviesByTitle(arr);
        console.log(setMovieTitle);
        setSearch(true);
        setMovieTitle("");
        navigate('search-results');
    }

    return (
        <form className="Form" onSubmit={handleSubmit}>
            <span>
                <input
                    className='Input'
                    name='search-field'
                    id='search-field'
                    placeholder='Search'
                    type='search'
                    value={movieTitle}
                    onChange={(e) => { setMovieTitle(e.target.value) }}
                />
                <button className='submit'>Enter</button>
            </span>
        </form>
    )
}

export default InputForm;
