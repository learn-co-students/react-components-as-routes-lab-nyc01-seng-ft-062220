import React from 'react';
import { movies } from '../data';

const Movies = () => {

  // let renderMovies = movies.map(movie => {
  //   return ( 
  // <div>
  //   <h4>{movie.title}</h4>
  //   <p>{movie.time}</p>
  //   <ul>
  //     {movie.genre.map(genre => <li>{genre}</li>)}
  //     </ul>
  //   <h5>{movie.metascore}</h5>
  // </div>
  //   )
  // })
  
  return (
    <div>
      <h1> Movies</h1>
        {/* {renderMovies()} */}
    </div>
  );
}

export default Movies;
