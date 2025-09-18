import React, { useState, useContext } from 'react';
import { db } from '../../firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
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

    const order = {
      buyer: formData,
      items: cart,
      total: totalPrice,
      date: serverTimestamp()
    };

    try {
      const docRef = await addDoc(collection(db, 'orders'), order);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error('Error al crear la orden:', error);
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