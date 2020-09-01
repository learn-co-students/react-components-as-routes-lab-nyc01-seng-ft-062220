import React from 'react';
import { directors } from '../data';

const mapDirectors = () => {
  return (directors.map((director, index) => {
    return (
      <div key={index}>
        <h3>Name: {director.name}</h3>
              <p>Movies:</p>
              <ul>
                  {director.movies.map((movie, index) => {
                      return (<li key={index}>{movie}</li>)
                  })}
              </ul>
      </div>
    )
  })
    ) 
}

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {mapDirectors()}
    </div>
  );
}

export default Directors
