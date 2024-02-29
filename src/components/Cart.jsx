import { useContext } from "react";
import { ShopProviderContext } from "../providers/ShopProvider";

export default function Cart() {
  const { cartItems } = useContext(ShopProviderContext);

  return (
    <>
      <div> Cart: {cartItems.length}</div>
    </>
  );
}
