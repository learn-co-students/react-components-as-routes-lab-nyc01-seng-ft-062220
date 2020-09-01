import React, { Fragment } from 'react';
import { actors } from '../data';

const Actors = () => {

  const actorList = () => {
    return actors.map(actor => 
    <div className="card" key={actor.name}>
      <h2>{actor.name}</h2>
      <h3>Movies:</h3>
      <ul>
        {actor.movies.map(movie => <li key={movie}>{movie}</li>)}
      </ul>
    </div>
    )
  }

  return (
    <Fragment>
      <h1>Actors Page</h1>
      <div className="container">
        {actorList()}
      </div>
    </Fragment>
  );
};

export default Actors;
