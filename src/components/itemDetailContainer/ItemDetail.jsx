import React from 'react';
import ItemCount from './ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ item, onAdd }) => {
  return (
    <div className="item-detail">
      <img src={item.img} alt={item.nombre} /> {}
      <div>
        <h2>{item.nombre}</h2>
        <p>{item.descripcion}</p>
        <p>Precio: ${item.precio}</p>
        
        {item.stock > 0 ? (
          <>
            <p>Stock disponible: {item.stock}</p>
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
          </>
        ) : (
          <p>Producto sin stock</p>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;