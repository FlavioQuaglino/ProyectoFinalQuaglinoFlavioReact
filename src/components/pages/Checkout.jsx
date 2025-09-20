import React, { useState, useContext } from 'react';
import { db } from '../../firebaseConfig';
import { collection, addDoc, serverTimestamp, doc, getDoc, writeBatch } from 'firebase/firestore'; 
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [orderId, setOrderId] = useState(null);
  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (cart.length === 0) {
      console.error("No hay productos en el carrito.");
      return;
    }

    const batch = writeBatch(db);
    const outOfStock = [];

    for (const item of cart) {
      const docRef = doc(db, 'products', item.id);
      const productSnap = await getDoc(docRef);
      const currentStock = productSnap.data().stock;

      if (currentStock >= item.quantity) {
        batch.update(docRef, { stock: currentStock - item.quantity });
      } else {
        outOfStock.push(item);
      }
    }

    if (outOfStock.length === 0) {
      const order = {
        buyer: formData,
        items: cart,
        total: totalPrice,
        date: serverTimestamp()
      };

      try {
        const docRef = await addDoc(collection(db, 'orders'), order);
        await batch.commit(); 
        setOrderId(docRef.id);
        clearCart();
        console.log("Orden generada con éxito. ID:", docRef.id); // <-- Añadido para depurar
      } catch (error) {
        console.error('Error al crear la orden:', error);
      }
    } else {
      console.error('Algunos productos no tienen stock suficiente:', outOfStock);
      alert('Algunos productos se han agotado. Por favor, revisa tu carrito.');
    }
  };

  if (orderId) {
    return (
      <div className="checkout-success">
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu número de orden es: <strong>{orderId}</strong></p>
        <Link to="/" className="home-link">Volver a la tienda</Link>
      </div>
    );
  }

  return (
    <div className="checkout-form-container">
      <h1>Finalizar Compra</h1>
      <form onSubmit={handleSubmit} className="checkout-form">
        <label>
          Nombre completo:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Teléfono:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <button type="submit" disabled={cart.length === 0}>Generar Orden</button>
      </form>
    </div>
  );
};

export default Checkout;