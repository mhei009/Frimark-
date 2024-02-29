import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import "./ProductPage.css";
import { ShopProvider2Context } from "../../providers/ShopProvider2";
import { Button } from "@chakra-ui/react";
import NewsLetterPopup from "../../components/NewsLetterPopup/NewsLetterPopup"

const ProductPage = ({ showNewsLetterPopup }) => { 
  const { productId } = useParams();
  const { products, addToCart } = useContext(ShopProvider2Context);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productDetails = products.find((product) => product.id === productId);
    if (productDetails) {
      setProduct(productDetails);
    }
  }, [productId, products]);

  const handleClick = () => {
    addToCart(product.id, product.name, product.price);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container" >
        <h2>{product.name}</h2>
        <div className="Product">
          <div>
            <img
              src={product.image}
              alt={"image showing a" + product.name}
              width={100}
              height={100}
            ></img>
          </div>
          <div>
            <p>{product.description}</p>
            <p>Price: {product.price} </p>
            <Button
              className="price-button"
              onClick={(e) => {
                e.preventDefault();
                handleClick();
              }}
              colorScheme="teal"
              size="md"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
      {showNewsLetterPopup && <NewsLetterPopup />} 
    </>
  );
};

export default ProductPage;
