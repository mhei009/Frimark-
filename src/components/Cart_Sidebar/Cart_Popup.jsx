import { useContext } from "react";
import { useCartPopup2 } from "../../providers/useCartPopup2";
import { ShopProvider2Context } from "../../providers/ShopProvider2";
import "./Cart_Popup.css";

const Popup = () => {
  const { isOpen, togglePopup } = useCartPopup2();
  const { cart, removeItem, clearCart } = useContext(ShopProvider2Context);

  const handleRemoveItem = (id) => {
    removeItem(id);
  };

  const totalPrice = cart
    .reduce((total, item) => total + parseFloat(item.totalPrice), 0)
    .toFixed(2);

  return (
    <div className="popup-content">
      <div className={`popup ${isOpen ? "open" : ""}`}>
        <div>
          <h2>Your Cart:</h2>
        </div>
        <div className="space">
          <div>
            <ul>
              {cart.map(({ id, name, quantity, totalPrice }) => (
                <li key={id}>
                  {quantity} x {name} = {`${totalPrice} SEK`}{" "}
                  <button onClick={() => handleRemoveItem(id)}>
                    Remove Item
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="price-and-button">
            <div>
              <p>Total price: {totalPrice} SEK</p>
            </div>

            <div>
              <button className="checkout-button">checkout</button>
              <button className="clearcart" onClick={clearCart}>
                Clear
              </button>
              <button className="close-btn2" onClick={togglePopup}>
                Close the cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
