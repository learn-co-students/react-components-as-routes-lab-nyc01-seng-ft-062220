import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
        {directors.map((directors, index) => (
          <div key={index}>
            {console.log(directors)}
            <h3>{directors.name}</h3>
            <ul>
              {directors.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </div> 
        ))}
    </div>
  );
}

export default Directors
