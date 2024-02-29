import { useState } from "react";
import "./NewsLetterPopup.css";

const NewsLetterPopup = () => {
  const [email, setEmail] = useState("");
  const [consentGiven, setConsentGiven] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  if (!showPopup) {
    return <div>Loading...</div>;
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Subscribed with email: ${email}`);
    setShowPopup(false);
    setShowMessage(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const closeMessage = () => {
    setShowMessage(false);
  };

  return (
    <>
      {showPopup && (
        <section className="modal-overlay">
          <div className="newsletter-popup">
            <button className="close-button" onClick={closePopup}>
              X
            </button>

            <div className="popup-content">
              <div className="popup-image">
                <img
                  src="wk.webp"
                  alt="picture of a baby smiling"
                  width={2001}
                  height={573}
                />
              </div>

              <div className="popup-text">
                <h2 className="newsletter-heading">Subscribe & Save 20%!</h2>
                <p className="newsletter-paragraph">
                  Join Primark´s newsletter for exclusive offers, new
                  collections, exciting collabs and a 20% discount on your first
                  purchase!
                </p>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                    aria-label="Email Address"
                  />

                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      id="consent"
                      checked={consentGiven}
                      onChange={() => setConsentGiven(!consentGiven)}
                      aria-checked={consentGiven}
                    />
                    <label htmlFor="consent" id="consentLabel">
                      I consent to my email being used for exclusive offers and
                      updates only.
                    </label>
                  </div>

                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
      {showMessage && (
        <div className="subscription-message">
          <button className="close-button" onClick={closeMessage}>
            X
          </button>
          Thank you for your subscription! Your unique discount code will be
          sent via your email.
        </div>
      )}
    </>
  );
};

export default NewsLetterPopup;
