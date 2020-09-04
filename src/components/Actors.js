import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const renderActor = ()=>{
    return actors.map(actor => <div> <h3>Name: {actor.name} </h3> Movies: <ul>{mapMovies(actor)} </ul></div>    )
  }
 const mapMovies= (actor) =>{
  return actor.movies.map(movie => <li>{movie}</li>)
 }
  return (
    <div>
      <h1> Actors Page</h1>
      {renderActor()}
    </div>
  );
};

export default Actors;
