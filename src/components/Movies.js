import React from 'react';
import { movies } from '../data';

/*
Tried definining it first then inserting it but it didn't work for some reason:

  let moviesArray = movies.map(movieObj => {
    <div>
      <h3>Name: {movieObj.title}</h3>
      <p>Time: {movieObj.time}</p>
      <p>Genres:</p>
        <ul>
  {movieObj.genres.map(genre => {return <li>{genre}</li>})}
        </ul>
    </div>})

eventually just copied solution because it was after floor hours and I was stuck

*/


const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => (
          <div key={index}>
              <h3>Name: {movie.title}</h3>
              <p>Time: {movie.time}</p>
              <p>Genres:</p>
              <ul>
                  {movie.genres.map((genre, index) => (
                      <li key={index}>{genre}</li>
                  ))}
              </ul>
          </div>
      ))}
    </div>
  );
};

export default Movies;