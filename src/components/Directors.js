import React from 'react';
import { directors } from '../data';

class Directors extends React.Component {
  
renderDirectors = () => directors.map(director => <div>
  {director.name}
  <ul>{director.movies.map(movie => <li>{movie}</li>)}</ul>
  </div>)

  render() {
    return (
      <div>
        <h1>Directors Page</h1>
        {this.renderDirectors()}
      </div>
    );
  }
}

export default Directors
