import PropTypes from "prop-types";
import { useContext } from "react";
import { ShopProvider2Context } from "../../providers/ShopProvider2";

import "./ItemCards.css";
import { Button } from "@chakra-ui/react";

export default function ItemCards({ product }) {
  const { addToCart } = useContext(ShopProvider2Context);

  ItemCards.propTypes = {
    product: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
  };

  const handleClick = () => {
    addToCart(product.id, product.name, product.price);
  };

  return (
    <article className="body">
      <h3>{product.name}</h3>
      <div className="pics">
        <img
          src={product.image}
          alt={"image showing a" + product.name}
          width={200}
          height={300}
          loading="lazy"
        ></img>
      </div>
      <div>{product.description}</div>
      <div>
        {product.price}
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
    </article>
  );
}
