import React, { useEffect, useState } from 'react';
import axios from 'axios';
import IntResCardBook from '../IntermediateResult/IntResCardBook';

const AllBooks = () => {
    const [bookTitle, setBookTitle] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(10); // Change this value as needed

    useEffect(() => {
        const fetchData = async () => {
            // Calculate the start and end indexes of the books to fetch
            const startIndex = (currentPage - 1) * booksPerPage;
            const endIndex = currentPage * booksPerPage;

            // Fetch data from the API
            const res = await axios.get("http://localhost:5010/books");
            const allBooks = res.data;

            // Slice the data to get only the books for the current page
            const booksForPage = allBooks.slice(startIndex, endIndex);

            setBookTitle(booksForPage);

            // Scroll to the top
            window.scrollTo(0, 0);
        }

        fetchData();
    }, [currentPage, booksPerPage]);

    // Pagination Functions
    const nextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };

    return (
        <div className="container mx-auto text-center">
            <h1>Books</h1>
            <ul className='mx-auto row text-center'>
                {bookTitle.map((book) => {
                    return <IntResCardBook key={book.id} book={book} />
                })}
            </ul>
            <div>
                {currentPage > 1 && <button onClick={prevPage}>Previous Page</button>}
                {bookTitle.length === booksPerPage && <button onClick={nextPage}>Next Page</button>}
            </div>
        </div>
    );
}

export default AllBooks;
