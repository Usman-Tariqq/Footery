// cartContext.jsx
import { useState, useEffect } from 'react';

export const useCart = () => {
  const [cart, setCart] = useState([]);
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

  const addToCart = (itemCode, quantity, price, name, color, size, variant, activeImage) => {
    let newCart = cart;
    console.log(itemCode)
    const cartItemKey = `${itemCode}-${color}-${size}`;
    const foundItemIndex = newCart.findIndex((cartItem) => cartItem.itemCode === itemCode && cartItem.color === color && cartItem.size === size);

    if (foundItemIndex !== -1) {
        newCart[foundItemIndex].quantity += quantity;
    } else {
        let object = {
            itemCode,
            quantity,
            price,
            name,
            color,
            size,
            variant,
            activeImage
        };
        newCart.push(object);
    }

    setCart([...newCart]); // Assuming setCart expects a new array reference to trigger re-renders
    saveCart(newCart);
};
  
const removeFromCart = (itemCode, quantity, price, name, color, size) => {
  let newCart = [...cart]; // Creating a new array instead of referencing the existing one directly

  const cartItemIndex = newCart.findIndex((cartItem) => cartItem.itemCode === itemCode && cartItem.color === color && cartItem.size === size);

  if (cartItemIndex !== -1) {
      newCart[cartItemIndex].quantity -= quantity;
      if (newCart[cartItemIndex].quantity <= 0) {
          newCart.splice(cartItemIndex, 1); // Remove item from cart if quantity is zero or negative
      }
      setCart(newCart);
      saveCart(newCart);
  }
};

  
  const clearCart = () => {
    setCart([]);
    setSubTotal(0);
    saveCart([]);
  };
  return { cart, subTotal, addToCart, clearCart, removeFromCart };
};
