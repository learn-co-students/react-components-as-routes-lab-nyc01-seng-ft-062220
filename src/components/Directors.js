import React from 'react';
import { directors } from '../data';

const Directors = () => {

  let renderDirectors = directors.map(director => {
    return ( 
  <>
    <h4>{director.name}</h4>
    <h5>List of movies:</h5>
    <ul>
      {director.movies.map(movie => <li>{movie}</li>)}
    </ul>
  </>
    )
  })

  return (
    <div>
      {renderDirectors}
    </div>
  );
}

export default Directors
