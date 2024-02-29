import { useState, createContext } from "react";
import data from "../data.json"; 
import PropTypes from "prop-types";

const clothes = data.clothes;

export const ShopProviderContext = createContext();

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState(clothes);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeItemFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const value = {
    products,
    setProducts,
    cartItems,
    addItemToCart,
    setCartItems,
    removeItemFromCart,
    clearCart,
  };

  return (
    <ShopProviderContext.Provider value={value}>
      {children}
    </ShopProviderContext.Provider>
  );
};

ShopProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
