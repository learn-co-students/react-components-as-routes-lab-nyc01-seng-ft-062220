import React from 'react';
import { directors } from '../data';

const Directors = () => {
  let directorsArray = directors.map(director => {
    return (
      <div>
        <p>{director.name}</p>
        <ul>
          {director.movies.map(movie => <li>{movie}</li>)}
        </ul>
      </div>
    )
  })
  
  
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsArray}
    </div>
  );
}

export default Directors
