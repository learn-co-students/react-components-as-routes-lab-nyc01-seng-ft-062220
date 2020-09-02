import React from 'react';
import { actors } from '../data';

class Actors extends React.Component {
  renderActors = () => actors.map(actor => <div>
    {actor.name}
    <ul>{actor.movies.map(movie => <li>{movie}</li>)}</ul>
    </div>)
  
  render() {
    return (
      <div>
        <h1>Actors Page</h1>
        {this.renderActors()}
      </div>
    );
  }
};

export default Actors;
