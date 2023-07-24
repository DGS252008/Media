import React from 'react';

import SearchMain from './SearchMain/SearchMain';
import TopMedia from './TopMedia/TopMedia';

const Home = ({moviesByTitle, setMoviesByTitle, search, setSearch}) => {
    return (
        <div>
            <>
                <SearchMain
                    moviesByTitle={moviesByTitle}
                    search={search}
                    setMoviesByTitle={setMoviesByTitle}
                    setSearch={setSearch}
                />
                <TopMedia />
            </>
        </div>
    )
}

export default Home;
