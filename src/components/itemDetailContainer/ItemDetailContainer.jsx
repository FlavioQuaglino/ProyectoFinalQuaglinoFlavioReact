import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import ItemDetail from './ItemDetail';
import { CartContext } from '../../context/CartContext';


const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();
  const { addItem } = useContext(CartContext); // <-- Corregido: ahora usas addItem

  useEffect(() => {
    const itemRef = doc(db, 'products', id);

    getDoc(itemRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setItem({
            id: snapshot.id,
            ...snapshot.data(),
          });
        }
      })
      .catch((error) => {
        console.error('Error al obtener el documento:', error);
      });
  }, [id]);

  const onAdd = (quantity) => {
    addItem(item, quantity); // <-- Llama a la función addItem que ya tiene toda la lógica
  };

  return (
    <div className="item-detail-container">
      {item ? <ItemDetail item={item} onAdd={onAdd} /> : <p>Cargando producto...</p>}
    </div>
  );
};

export default ItemDetailContainer;