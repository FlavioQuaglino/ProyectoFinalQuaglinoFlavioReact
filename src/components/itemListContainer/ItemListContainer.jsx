import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import ItemList from './ItemList';
import './ItemListContainer.css';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const productsRef = collection(db, 'products');

    const q = categoryId
      ? query(productsRef, where('categoria', '==', categoryId))
      : productsRef;

    getDocs(q)
      .then((snapshot) => {
        const itemsAdapted = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        
        // La línea que agregué para depurar
        console.log("Datos recibidos de Firebase:", itemsAdapted);
        
        setItems(itemsAdapted);
      })
      .catch((error) => {
        console.error('Error al obtener los documentos:', error);
      });
  }, [categoryId]);

  return (
    <div className="item-list-container">
      {items.length > 0 ? <ItemList items={items} /> : <p>Cargando productos...</p>}
    </div>
  );
};

export default ItemListContainer;