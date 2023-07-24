import React from "react";

import "./SearchMain.css";

import InputForm from "./InputForm/InputForm";

const SearchMain = ({ moviesByTitle, setMoviesByTitle, search, setSearch }) => {
    return (
        <div id="bg">
            <div id="desContainer">
                <h1 id="description" className="display-4">
                    Search through an endless library of books, movies, and shows for the
                    best recomendations.
                </h1>
                <InputForm
                    moviesByTitle={moviesByTitle}
                    search={search}
                    setMoviesByTitle={setMoviesByTitle}
                    setSearch={setSearch}
                />
            </div>
        </div>
    );
};

export default SearchMain;
