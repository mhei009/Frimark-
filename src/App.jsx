import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/HeaderComponent/Header";
import Shop from "./pages/ShopPage/Shop";
import ProductPage from "./pages/ProductPage/ProductPage";
import Popup from "./components/Cart_Sidebar/Cart_Popup";
import Footer from "./components/Footer/Footer";
import NewsLetterPopup from "./components/NewsLetterPopup/NewsLetterPopup";

function App() {
  const location = useLocation();


  const showNewsLetterPopup = location.pathname === "/";

  return (
    <div className="App">
      <ChakraProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/product/:productId" element={<ProductPage />} />
        </Routes>
        <Popup />
        <Footer />
        {showNewsLetterPopup && <NewsLetterPopup />}
      </ChakraProvider>
    </div>
  );
}

export default App;
