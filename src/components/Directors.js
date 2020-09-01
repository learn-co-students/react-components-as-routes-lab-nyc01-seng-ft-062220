import React, { Fragment } from 'react';
import { directors } from '../data';

const Directors = () => {

  const directorList = () => {
    return directors.map(director => 
    <div className="card" key={director.name}>
      <h2>{director.name}</h2>
      <h3>Movies:</h3>
      <ul>
        {director.movies.map(movie => <li key={movie}>{movie}</li>)}
      </ul>
    </div>
    )
  }

  return (
    <Fragment>
      <h1>Directors Page</h1>
      <div className="container">
        {directorList()}
      </div>
    </Fragment>
  );
}

export default Directors
