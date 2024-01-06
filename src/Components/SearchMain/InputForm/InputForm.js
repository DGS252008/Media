import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import axios from 'axios';

const InputForm = ({ mediaByTitle, setMediaByTitle, search, setSearch }) => {
    const [mediaTitle, setMediaTitle] = useState([]);
    const navigate = useNavigate();


    async function handleSubmit(e) {
        e.preventDefault();
        const media = { title: mediaTitle };
        const res = await axios.get("http://localhost:5010/search", {
            params: media
        });
        console.log(res.data);
        // if (typeof res.data === 'object' && !Array.isArray(res.data) && res.data !== null) {
        //     res.data = Object.entries(res.data);
        //     console.log(res.data);
        // }
        setMediaByTitle(res.data);
        console.log(setMediaTitle);
        setSearch(true);
        setMediaTitle("");
        navigate('search-results');
    }

    return (
        <form className="form-inline mx-auto" onSubmit={handleSubmit}>
            <span className='form-group mx-auto'>
                <input
                    className='form-control'
                    name='search-field'
                    id='search-field'
                    placeholder='Search titles'
                    type='search'
                    value={mediaTitle}
                    onChange={(e) => { setMediaTitle(e.target.value) }}
                />
                <button id='submitBtn' type='submit' className='btn m-1 text-white'>Enter</button>
            </span>
        </form>
    )
}

export default InputForm;
