import React from 'react';
import { actors } from '../data';

const Actors = () => {


  let renderActors = actors.map(actor => {
    return ( 
  <>
    <h4>{actor.name}</h4>
    <h5>List of movies:</h5>
    <ul>
      {actor.movies.map(movie => <li>{movie}</li>)}
      </ul>
  </>
    )
  })

  return (
    <div>
      {renderActors}
    </div>
  );
};

export default Actors;
