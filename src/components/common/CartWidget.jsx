import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to="/cart">
      <div className="cart-widget">
        <span>🛒</span>
        <span>{totalQuantity}</span>
      </div>
    </Link>
  );
};

export default CartWidget;