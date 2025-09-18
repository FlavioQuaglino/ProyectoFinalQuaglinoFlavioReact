import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  const removeItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  if (cart.length === 0) {
    return (
      <div className="cart-empty-message">
        <h2>Tu carrito está vacío 😔</h2>
        <Link to="/" className="cart-link">Explora nuestros productos</Link>
      </div>
    );
  }

  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="cart-container">
      <h1>Tu Carrito</h1>
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.imagen} alt={item.nombre} style={{ width: '100px', height: 'auto' }} />
            <div className="item-info">
              <h3>{item.nombre}</h3>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio: ${item.price}</p>
              <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
              <button onClick={() => removeItem(item.id)}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2>Total: ${total.toFixed(2)}</h2>
        <button onClick={clearCart}>Vaciar Carrito</button>
        <Link to="/checkout" className="checkout-button">Finalizar Compra</Link>
      </div>
    </div>
  );
};

export default Cart;