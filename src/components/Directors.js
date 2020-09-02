import React from 'react';
import { directors } from '../data';

class Directors extends React.Component {
  
  render(){
    
    let dir = directors.map((obj) => <div>{obj.name}
                                         <ul>{obj.movies.map(element => <li>{element}</li>
                                            )}                                         
                                         </ul>
                                         </div>
  )
  return (
    <div>
     { <h1>Directors Page</h1>}    
     {dir}
    </div>
  )
}
}
export default Directors
