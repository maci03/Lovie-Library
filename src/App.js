import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from './Components/MovieList';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');

  const addMovie = () =>{
    if(title && year){
      setMovies([...movies, {title, year}]);
      setTitle('');
      setYear('');
    }
  }

  useEffect(() => {
    fetch('https://api.example.com/movies')
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  return (
    <div className="app">
      <h1>Movie Library</h1>
    <div>
        <input
        type='text'
        placeholder='movie title'
        value={title}
        onChange={e => setTitle(e.target.value)}/>

        <input
        type='text'
        placeholder='Release year'
        value={year}
        onChange={e => setYear(e.target.value)} />

        <button onClick={addMovie}>Add Movie</button>
      </div>
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
