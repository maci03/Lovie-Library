import React from 'react';
import Movie from './Movie';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <Movie key={movie.id} title={movie.title} year={movie.year} />
      ))}
    </div>
  );
};

export default MovieList;
