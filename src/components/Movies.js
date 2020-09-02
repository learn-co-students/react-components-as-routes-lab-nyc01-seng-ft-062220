import React from 'react';
import { movies } from '../data';

class Movies extends React.Component{
  render(){
   
    let mov = movies.map((obj) => <div>{obj.title}
                                       {obj.time}
                                        <ul>{obj.genres.map(element => <li>{element}</li>
                                            )}                                         
                                         </ul>
                                         </div>
  )
  return ( 
   
    <div> 
      {<h1>Movies Page</h1>}
      {mov}
    </div>
  );
};
}

export default Movies;
