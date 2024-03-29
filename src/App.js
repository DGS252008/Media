import React, { useState } from 'react';
// Make sure you import the Switch component correctly
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import './App.css';
import Home from './Components/Home';
import IntAllRes from './Components/IntermediateResult/IntAllRes';
import IntResCard from './Components/IntermediateResult/IntResCard';
import ResultPage from './Components/ResultPage/ResultPage';
import ResultBookPage from './Components/ResultPage/ResultBookPage';
import NavBar from './Components/NavBar/NavBar';
import AllBooks from './Components/AllPages/AllBooks';
import AllMovies from './Components/AllPages/AllMovies';
import AllShows from './Components/AllPages/AllShows';

function App() {
  const [mediaByTitle, setMediaByTitle] = useState([]);
  const [search, setSearch] = useState(false);

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Home
                mediaByTitle={mediaByTitle}
                search={search}
                setMediaByTitle={setMediaByTitle}
                setSearch={setSearch}
              />
            </>
          }
        />
        <Route
          path='/search-results'
          element={
            <>
              <IntAllRes results={mediaByTitle} />
            </>
          }
        />
        <Route
          path='/all-books'
          element={
            <>
              <AllBooks />
            </>
          }
        />
        <Route
          path='/all-movies'
          element={
            <>
              <AllMovies />
            </>
          }
        />
        <Route
          path='/all-shows'
          element={
            <>
              <AllShows />
            </>
          }
        />
        <Route
          path="/results/:result_id"
          element={<ResultPage />}
        />
        <Route
          path='/results/book/:result_id'
          element={<ResultBookPage />}
        />
      </Routes>
    </>
  );
}

export default App;
