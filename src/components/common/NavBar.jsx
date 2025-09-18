import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav>
      <Link to="/"><h1>Potter E-Commerce</h1></Link>
      <ul>
        <li><Link to="/category/libros">Libros</Link></li>
        <li><Link to="/category/peliculas">Películas</Link></li>
        <li><Link to="/cart"><CartWidget /></Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;