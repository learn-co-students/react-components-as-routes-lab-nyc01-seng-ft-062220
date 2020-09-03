import React from 'react';
import {actors, directors} from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => {
        return(
          <div className="directors">
            {director.name}
            <ul>
              {director.movies.map(movie => {
                return(
                  <li>{movie}</li>
                )
              })}
            </ul>

          </div>
        )
      })
      }
    </div>
  );
}

export default Directors
