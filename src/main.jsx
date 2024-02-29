import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { ShopProvider2 } from "./providers/ShopProvider2.jsx";
import { PopupProvider } from "./providers/useCartPopup2.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ShopProvider2>
        <PopupProvider>
          <App />
        </PopupProvider>
      </ShopProvider2>
    </Router>
  </React.StrictMode>
);
