import React from 'react';
import { movies } from '../data';
import Movie from './Movie'

class Movies extends React.Component {
  
  renderMovies = () => movies.map(movie => <div>
    <p>{movie.title}</p>
    <p>{movie.time}</p>
    <ul>{movie.genres.map(genre => <li>{genre}</li>)}</ul>
    </div>)
  
  render() {
    return (
      <div>
        <h1>Movies Page</h1>
        {this.renderMovies()}
      </div>
    );
  }
};

export default Movies;
