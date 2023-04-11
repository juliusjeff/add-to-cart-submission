const addToCartButton = document.querySelector('.add-to-cart');
const cart = document.querySelector('.cart');
let cartTotal = 0.00;

addToCartButton.addEventListener('click', addToCart);

function addToCart() {
  const productName = document.querySelector('.product h2').textContent;
  const productPrice = parseFloat(document.querySelector('.product p').textContent.slice(1));

  const cartItem = document.createElement('li');
  cartItem.textContent = `${productName} - $${productPrice.toFixed(2)}`;

  cart.querySelector('ul').appendChild(cartItem);

  cartTotal += productPrice;
  cart.querySelector('p').textContent = `Total: $${cartTotal.toFixed(2)}`;
}
