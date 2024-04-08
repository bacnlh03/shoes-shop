import React, { useEffect } from "react";
import useCartStore from "../../features/cart/cartStore";
import CartItem from "../../components/CartItem";
import { Col, Container, Row } from "react-bootstrap";
import Checkout from "../../components/Checkout";

const Cart = () => {
  const { cart, getCart } = useCartStore();

  const subtotal = (cart) => {
    let price = 0;

    for (let i = 0; i < cart.length; i++) {
      price += cart[i].price;
    }

    return price;
  };

  useEffect(() => {
    getCart();
  }, [getCart]);

  return (
    <>
      <Container>
        {
          cart.length === 0
            ? <div>There are no items in your cart.</div>
            : (
              <Row>
                <Col className="me-3" xs={7}>
                  <h2 className="d-flex">Cart</h2>
                  <div style={{ height: '50%', overflowY: 'scroll' }}>
                    {
                      cart.map((product) => (
                        <CartItem key={product.id} product={product} />
                      ))
                    }
                  </div>
                </Col>

                <Col>
                  <Checkout
                    totalPrice={subtotal(cart)}
                    style={{ width: '100%', height: '100%' }}
                  />
                </Col>
              </Row>
            )
        }
      </Container>
    </>
  );
};

export default Cart;