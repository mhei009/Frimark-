export default function addToCart(item, amount, currentCart) {
  //can add logic for adding to cart here, has access to whichever item was clicked, as well as a value for amount
  // as well as current cart contents to allow imutably returning a new object if we wish to use that

  console.log(item + " added to cart.");
  console.log(currentCart + " current cart total");

  return currentCart + 1; //right now it just adds one item to the cart total
}
