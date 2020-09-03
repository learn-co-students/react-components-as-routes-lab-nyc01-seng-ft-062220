import React from 'react';
import {directors, movies} from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie => {
        return(
          <div className="movies">
            {movie.title}
            <ul>
              <li>Time: {movie.time} minutes</li>
              <li>Genres:</li>
              <ul>
                {movie.genres.map(genre => {
                  return(
                    <li>{genre}</li>
                  )
                })}
              </ul>

            </ul>

          </div>
        )
      })
      }
    </div>
  );
};

export default Movies;
