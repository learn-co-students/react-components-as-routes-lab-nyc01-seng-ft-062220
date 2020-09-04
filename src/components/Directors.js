import React from 'react';
import { directors } from '../data';

const Directors = () => {


  const renderDirector = ()=>{
    return directors.map(director => <div> <h3>Name: {director.name} </h3> Movies: <ul>{mapMovies(director)} </ul></div>    )
  }
 const mapMovies= (director) =>{
  return director.movies.map(movie => <li>{movie}</li>)
 }
  return (
    <div>
      <h1> Directors Page</h1>
      {renderDirector()}
    </div>
  );
}

export default Directors
