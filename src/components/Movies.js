import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const renderMovies = ()=>{
    return movies.map(movie => <div> <h3>Title: {movie.title} </h3> Time: {movie.time} <br></br> Genres: <ul>{mapGenres(movie)} </ul></div>    )
  }
 const mapGenres = (movie) =>{
  return movie.genres.map(genre => <li>{genre}</li>)
 }


  return (
    <div>
        <h1>Movies Page</h1>
        {renderMovies()}
    </div>
  );
};

export default Movies;
