import React from 'react';
import { directors } from '../data';

/*
Again, my code didn't work and i'm not sure why. the only difference that we're creating larger blocsk to insert than usual but I'm not sure why that would
not work.

Same as Movies - eventually just copied solution

let directorsFormatting = directors.map(
      directorObj => {
        return
        <div>
          <h3>Name: {directorObj.name}</h3>
          <p>Movies:</p>
              <ul>
                  {directorObj.movies.map(movie => <li>{movie}</li> )}
              </ul>
        </div>

      }

*/


  const Directors = () => {
    return (
      <div>
        <h1>Directors Page</h1>
        {directors.map((director, index) => (
            <div key={index}>
                <h3>Name: {director.name}</h3>
                <p>Movies:</p>
                <ul>
                    {director.movies.map((movie, index) => (
                        <li key={index}>{movie}</li>
                    ))}
                </ul>
            </div>
        ))}
      </div>
    );
  }

export default Directors
