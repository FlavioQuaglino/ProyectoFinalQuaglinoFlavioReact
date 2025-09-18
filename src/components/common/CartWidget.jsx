import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import cartIcon from '../../assets/cart-icon.svg'; // Aquí está la ruta corregida

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <div>
      <img src={cartIcon} alt="Carrito" style={{ width: 24, height: 24 }} />
      <span>{totalQuantity}</span>
    </div>
  );
};

export default CartWidget;