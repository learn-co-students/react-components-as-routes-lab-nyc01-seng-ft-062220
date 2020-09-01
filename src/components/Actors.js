import React from 'react';
import { actors } from '../data';

const mapActors = () => {
  return (
    actors.map((actor,index) => {
      return (
        <div key={index}>
          <h1>Name: {actor.name}</h1>
          <p>Movies:</p>
          <ul>
            {actor.movies.map((movie,index) => {
              return (
                <li key={index}>{movie}</li>
              )
            })
            }
          </ul>
        </div>
      )
    })
  )
}

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {mapActors()}
    </div>
  );
};

export default Actors;
