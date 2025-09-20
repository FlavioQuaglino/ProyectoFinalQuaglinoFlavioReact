import React from 'react';
import Item from './Item';
import './ItemList.css'; // Asegúrate de importar el CSS

const ItemList = ({ items }) => {
  return (
    <div className="item-list"> {/* <-- ¡Asegúrate de que tenga esta clase! */}
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;