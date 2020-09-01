import React from 'react';
import { actors } from '../data';

class Actors extends React.Component {
  render(){

    let act = actors.map((obj) => <div>{obj.name}
                                      <ul>{obj.movies.map(element => <li>{element}</li>
                                      )}                                         
                                      </ul>
                                     </div>
)
  return (
    <div>
      {<h1>Actors Page</h1>}
      {act}
    </div>
  );
};
}

export default Actors;
