import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'gray',
    textDecoration: 'none',
    color: 'white',
  }

  return (
    <div className="nav-bar">
        <NavLink to="/" exact style={link} activeStyle={{background: 'darkgray'}}>Home</NavLink>
        <NavLink to="/movies" exact style={link} activeStyle={{background: 'darkgray'}}>Movies</NavLink>
        <NavLink to="/directors" exact style={link} activeStyle={{background: 'darkgray'}}>Directors</NavLink>
        <NavLink to="/actors" exact style={link} activeStyle={{background: 'darkgray'}}>Actors</NavLink>
    </div>
  );
};

export default NavBar;
