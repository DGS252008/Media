import React from "react";

import "./SearchMain.css";

import InputForm from "./InputForm/InputForm";

const SearchMain = ({ mediaByTitle, setMediaByTitle, search, setSearch }) => {
    return (
        <div id="bg">
            <div id="desContainer" className="mx-auto">
                <div className="d-flex justify-content-center">
                    <h1 id="description" className="font-weight-light text-white">
                        Search through an endless library of books, movies, and shows for the
                        best recomendations.
                    </h1>
                </div>
                <InputForm
                    mediaByTitle={mediaByTitle}
                    search={search}
                    setMediaByTitle={setMediaByTitle}
                    setSearch={setSearch}
                />
            </div>
        </div>
    );
};

export default SearchMain;
