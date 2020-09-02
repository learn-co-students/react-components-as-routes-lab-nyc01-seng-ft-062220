import React from 'react';
import { movies } from '../data';

class Movies extends React.Component {

  getMovies = () => {
    return movies.map(movie => {
      return <div>
        <div>
          Name:{movie.title}
        </div>
        <div>
          Time:{movie.time}
        </div>
        <ul>
          {movie.genres.map(genre => {
            return <li>{genre}</li>
          })}
        </ul>
      </div>
    })
  }

  render() {
    return (
      <div>
          <h1>Movies Page</h1>
          {this.getMovies()}
      </div>
    )
  }
}

export default Movies;

