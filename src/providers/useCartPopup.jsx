import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <PopupContext.Provider value={{ isOpen, togglePopup }}>
      {children}
    </PopupContext.Provider>
  );
};

PopupProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export const usePopup = () => useContext(PopupContext);
