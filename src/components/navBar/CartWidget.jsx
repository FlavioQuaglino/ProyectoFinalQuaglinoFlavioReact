import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de que Link esté importado
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to="/cart"> {/* Lo envolvemos en un Link para que sea cliqueable */}
      <div className="cart-widget">
        <span role="img" aria-label="carrito">🛒</span> {/* ¡Aquí está el emoticono! */}
        <span>{totalQuantity}</span>
      </div>
    </Link>
  );
};

export default CartWidget;