import React from "react";
import { useContext } from "react";
import { useCartPopup2 } from "../../providers/useCartPopup2";
import { ShopProvider2Context } from "../../providers/ShopProvider2";
import "./Header.css";
import { Box, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Header() {
  const { totalItems } = useContext(ShopProvider2Context);
  const { togglePopup } = useCartPopup2();

  return (
    <Box as="header" className="header-container">
      <Link rel="preload" to="/">
        <Text
          as="h1"
          fontSize="40px"
          fontWeight="bold"
          color="black"
          className="head"
        >
          Frimark
        </Text>
      </Link>
      <Button colorScheme="salmon" onClick={togglePopup}>
        {totalItems} Cart
      </Button>
    </Box>
  );
}
