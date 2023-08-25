import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from './Components/MovieList';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movie data from an API (replace with a real API endpoint)
    fetch('https://api.example.com/movies')
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  return (
    <div className="app">
      <h1>Movie Library</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
