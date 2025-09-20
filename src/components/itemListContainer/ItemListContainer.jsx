import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import ItemList from './ItemList';
import './ItemListContainer.css';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true); // <-- Estado de carga
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true); // <-- Iniciamos en `true` al cargar o cambiar de categoría

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
        
        setItems(itemsAdapted);
      })
      .catch((error) => {
        console.error('Error al obtener los documentos:', error);
      })
      .finally(() => {
        setLoading(false); // <-- Terminamos de cargar, sin importar si hubo un error o no
      });
  }, [categoryId]);

  if (loading) {
    return <h2 className="loading-message">Cargando productos...</h2>;
  }

  return (
    <div className="item-list-container">
      {items.length > 0 ? <ItemList items={items} /> : <h2>No se encontraron productos</h2>}
    </div>
  );
};

export default ItemListContainer;