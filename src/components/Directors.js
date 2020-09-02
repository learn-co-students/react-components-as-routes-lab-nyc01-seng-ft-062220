import React from 'react';
import { directors } from '../data';

class Directors extends React.Component {

  getDirectors = () => {
    return directors.map(dir => {
      return <div>
        <div>
          Name: {dir.name}
        </div>
        <ul>
          Movies: {dir.movies.map(mov => {
            return <li>{mov}</li>
          })}
        </ul>
      </div>
    })
  }

  render() {
    return (
      <div>
        <h1>Directors Page</h1>
        {this.getDirectors()}
      </div>
    )
  }
}

export default Directors

