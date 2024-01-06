import React from 'react';

import SearchMain from './SearchMain/SearchMain';
import TopMedia from './TopMedia/TopMedia';

const Home = ({ mediaByTitle, setMediaByTitle, search, setSearch}) => {
    return (
        <div>
            <>
                <SearchMain
                    mediaByTitle={mediaByTitle}
                    search={search}
                    setMediaByTitle={setMediaByTitle}
                    setSearch={setSearch}
                />
                <TopMedia />
            </>
        </div>
    )
}

export default Home;
