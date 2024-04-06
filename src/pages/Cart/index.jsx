import React, { useEffect } from "react";
import useCartStore from "../../features/cart/cartStore";
import CartItem from "../../components/CartItem";

const Cart = () => {
  const { cart, getCart } = useCartStore();

  useEffect(() => {
    getCart();
  }, [getCart]);

  return (
    <>
      <h2>Cart</h2>

      {
        cart.length === 0
          ? <div>There are no items in your cart.</div>
          : cart.map((product) => (
            <CartItem key={product.id} product={product} />
          ))
      }
    </>
  );
};

export default Cart;