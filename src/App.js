import React, { useState } from 'react';
import { Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './Components/Home';
import ResultPage from './Components/ResultPage/ResultPage';
import NavBar from './Components/NavBar/NavBar';
import AllBooks from './Components/AllPages/AllBooks/AllBooks';
import AllMovies from './Components/AllPages/AllMovies/AllMovies';
import AllShows from './Components/AllPages/AllShows/AllShows';

function App() {
  const [moviesByTitle, setMoviesByTitle] = useState([]);
  const [search, setSearch] = useState(false);

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path='/'
          element={
            <Home
              moviesByTitle={moviesByTitle}
              search={search}
              setMoviesByTitle={setMoviesByTitle}
              setSearch={setSearch}
            />
          }
        />
        <Route
          path='/search-results'
          element={
            <ResultPage moviesByTitle={moviesByTitle} search={search} />
          }
        />
        <Route 
          path='/all-books'
          element={
            <AllBooks />
          }
        />
        <Route
          path='/all-movies'
          element={
            <AllMovies />
          }
        />
        <Route
          path='/all-shows'
          element={
            <AllShows />
          }
        />
      </Routes>
    </>
  );
}

export default App;
