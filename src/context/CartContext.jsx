import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product
        )
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const removeItem = (itemId) => {
    setCart(cart.filter((product) => product.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((product) => product.id === itemId);
  };

  const totalQuantity = cart.reduce((total, product) => total + product.quantity, 0);

  const totalPrice = cart.reduce((total, product) => total + product.precio * product.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, isInCart, totalQuantity, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};