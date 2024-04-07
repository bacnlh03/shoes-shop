let cart = JSON.parse(sessionStorage.getItem('cart')) || [];

const CartService = {
  addToCart: async (product) => {
    cart.push(product);
    sessionStorage.setItem('cart', JSON.stringify(cart));
  },
  getCart: async () => {
    return cart;
  },
  removeFromCart: async (product) => {
    cart = cart.filter(item => item !== product);
    sessionStorage.setItem('cart', JSON.stringify(cart));
  },
  handleCheckout: async () => {
    sessionStorage.removeItem('cart');
  }
};

export default CartService;