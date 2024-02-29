import React, { useState, useContext, createContext } from "react";

const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false); // Example useState usage
  const togglePopup = () => setIsOpen(!isOpen);

  return (
    <PopupContext.Provider value={{ isOpen, togglePopup }}>
      {children}
    </PopupContext.Provider>
  );
};

export const useCartPopup2 = () => {
  return useContext(PopupContext);
};
