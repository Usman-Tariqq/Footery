// cart.js

import { useState, useEffect } from 'react';

export const useCart = () => {
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    try {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        setCart(JSON.parse(storedCart));
        saveCart(JSON.parse(storedCart));
      }
    } catch (error) {
      console.error("Error loading cart from local storage:", error);
      // If there's an error, clear the local storage
      localStorage.clear();
    }
  }, []);

  const saveCart = (myCart) => {
    try {
      localStorage.setItem("cart", JSON.stringify(myCart));
      // Calculate subtotal after saving the cart
      let subt = 0;
      let keys = Object.keys(myCart);
      for (let i = 0; i < keys.length; i++) {
        subt += myCart[keys[i]].price * myCart[keys[i]].quantity;
      }
      setSubTotal(subt);
    } catch (error) {
      console.error("Error saving cart to local storage:", error);
    }
  };

  const addToCart = (itemCode, quantity, price, name, size, variant) => {
    let newCart = { ...cart };
    if (itemCode in cart) {
      newCart[itemCode].quantity += quantity;
    } else {
      newCart[itemCode] = { quantity, price, name, size, variant };
    }
    setCart(newCart);
    saveCart(newCart);
  };

  const clearCart = () => {
    setCart({});
    setSubTotal(0);
    saveCart({});
  };

  const removeFromCart = (itemCode, quantity, price, name, size, variant) => {
    let newCart = { ...cart };
    if (itemCode in cart) {
      newCart[itemCode].quantity -= quantity;
      if (newCart[itemCode].quantity <= 0) {
        delete newCart[itemCode];
      }
      setCart(newCart);
      saveCart(newCart);
    }
  };

  return { cart, subTotal, addToCart, clearCart, removeFromCart };
};
