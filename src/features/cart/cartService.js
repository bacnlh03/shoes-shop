const CartService = {
  addToCart: async (product) => {
    const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    console.log(`Current cart: ${cart}`);
    cart.push(JSON.stringify(product));
    console.log(`After push: ${cart}`);
    sessionStorage.setItem('cart', JSON.stringify(cart));
  },
  getCart: () => {
    return JSON.parse(sessionStorage.getItem('cart'));
  }
};

export default CartService;