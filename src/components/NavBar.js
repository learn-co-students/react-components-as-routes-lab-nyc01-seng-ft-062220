import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink
      to= "/"
      exact
      activeStyle={{background:'darkred'}}
      >Home</NavLink>

<NavLink
      to= "/movies"
      exact
      activeStyle={{background:'darkred'}}
      >Movies</NavLink>
      <NavLink
      to= "/directors"
      exact
      activeStyle={{background:'darkred'}}
      >Directors</NavLink>
      <NavLink
      to= "/actors"
      exact
      activeStyle={{background:'darkred'}}
      >Actors</NavLink>
      
    </div>
    
  );
};

export default NavBar;
