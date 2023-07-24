import React from 'react';

import './NavDrop.css';

const NavDrop = () => {
    return (
        <div className="dropdown">
            <button
                id="dropdownMenuButton"
                className="btn dropdown-toggle text-white"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
            >
                Menu
            </button>
            <div id='drop' className="btn dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item text-white" href="/">Home</a>
                <a className="dropdown-item text-white" href="/all-books">All Books</a>
                <a className="dropdown-item text-white" href="/all-movies">All Movies</a>
                <a className="dropdown-item text-white" href="/all-shows">All Shows</a>
            </div>
        </div>
    );
}

export default NavDrop;
