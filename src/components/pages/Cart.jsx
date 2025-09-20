import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, removeItem, clearCart, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="cart-container empty-cart">
        <h2>Tu carrito está vacío 😔</h2>
        <p>Parece que no has agregado ninguna película o libro de Harry Potter aún.</p>
        <Link to="/" className="cart-link">Explora nuestros productos</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1>Tu Carrito</h1>
      <div className="cart-items"> {}
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.img} alt={item.nombre} style={{ width: '100px', height: 'auto' }} /> {/* ¡item.img corregido! */}
            <div className="item-info">
              <h3>{item.nombre}</h3>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio: ${item.precio}</p>
              <p>Subtotal: ${(item.precio * item.quantity).toFixed(2)}</p>
              <button onClick={() => removeItem(item.id)}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2>Total: ${totalPrice.toFixed(2)}</h2>
        <button onClick={clearCart}>Vaciar Carrito</button>
        <Link to="/checkout" className="checkout-button">Finalizar Compra</Link>
      </div>
    </div>
  );
};

export default Cart;