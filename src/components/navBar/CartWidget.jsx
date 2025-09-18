import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-widget">
      <span>{totalItems}</span>
      <img src="https://firebasestorage.googleapis.com/v0/b/harrypotter-ecommerce.appspot.com/o/shopping-cart.png?alt=media&token=1e5d95e0-8199-4d37-8e6d-74d75d31f0d3" alt="Carrito de compras" style={{ width: '25px', height: 'auto' }} />
    </div>
  );
};

export default CartWidget;