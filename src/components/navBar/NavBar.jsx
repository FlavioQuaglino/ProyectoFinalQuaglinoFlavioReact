import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <h1>Potter E-Commerce</h1>
      </Link>
      <div className="navbar-links">
        <Link to="/category/libros" className="navbar-item">Libros</Link>
        <Link to="/category/peliculas" className="navbar-item">Peliculas</Link>
      </div>
      <Link to="/cart"><CartWidget /></Link> {}
    </nav>
  );
};

export default NavBar;