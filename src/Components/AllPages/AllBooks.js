import { React, useEffect, useState } from 'react';
import axios from 'axios';

import IntResCardBook from '../IntermediateResult/IntResCardBook';

const AllBooks = () => {
    const [bookTitle, setBookTitle] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const book = { title: bookTitle };
            const res = await axios.get("http://localhost:5010/books", {
                params: book
            });
            setBookTitle(res.data);
        }

        fetchData();
    }, []);

    return (
        <div className="container mx-auto text-center">
            <h1>Books</h1>
            <ul className='mx-auto row text-center'>
                {bookTitle.map((book) => {
                    return <IntResCardBook book={book} />
                })}
            </ul>
        </div>
    );
}

export default AllBooks
