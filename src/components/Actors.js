import React from 'react';
import { actors } from '../data';

class Actors extends React.Component {

  getActors = () => {
    return actors.map(actor => {
      return <div>
        <div>
          Name: {actor.name}
        </div>
        <ul>
          Movies: {actor.movies.map(movie => {
            return <li>{movie}</li>
          })}
        </ul>
      </div>
    })
  }

  render() {
    return (
      <div>
        <h1>Actors Page</h1>
        {this.getActors()}
      </div>
    )
  }
}

export default Actors;

