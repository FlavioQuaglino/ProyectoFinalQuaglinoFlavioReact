import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  return (
    <div className="item">
      <img src={item.imagen} alt={item.nombre} />
      <h3>{item.nombre}</h3>
      <p>Precio: ${item.precio}</p>
      <Link to={`/item/${item.id}`}>Ver detalles</Link>
    </div>
  );
};

export default Item;