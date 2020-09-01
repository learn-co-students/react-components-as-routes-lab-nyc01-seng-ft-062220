import React, { Fragment } from 'react';
import { movies } from '../data';

const Movies = () => {

  const movieList = () => {
    return movies.map(movie => 
    <div className="card" key={movie.title}>
      <h2>{movie.title}</h2>
      <p>Duration: {movie.time}minutes</p>
      <h3>Genres:</h3>
      <ul>
        {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
      </ul>
    </div>
    )
  }

  return (
    <Fragment>
      <h1>Movies Page</h1>
      <div className="container">
          {movieList()}
      </div>
    </Fragment>
  );
};

export default Movies;
