import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  return (
    <div className="item">
      <img src={item.img} alt={item.nombre} />
      <h3>{item.nombre}</h3>
      <p>Precio: ${item.precio}</p>
      <Link to={`/item/${item.id}`} className="item-link">Ver detalles</Link> {/* <-- ¡Aquí está la clase! */}
    </div>
  );
};

export default Item;