import React, { useEffect, useState } from "react";
import useCartStore from "../../features/cart/cartStore";
import CartItem from "../../components/CartItem";
import { Button, Col, Container, Row, Toast } from "react-bootstrap";
import Divider from "../../components/Divider";

const Cart = () => {
  const { cart, getCart, handleCheckout } = useCartStore();

  const subtotal = (cart) => {
    let price = 0;

    for (let i = 0; i < cart.length; i++) {
      price += cart[i].price;
    }

    return price;
  };
  const dilivery = 10000;

  const [isCheckOut, setIsCheckOut] = useState(false);

  const onCheckout = async () => {
    handleCheckout()
      .then(() => setIsCheckOut(true))
      .then(() => setTimeout(() => {
        window.location.reload()
      }, 2050));
  }

  useEffect(() => {
    getCart();
  }, [getCart]);

  return (
    <>
      <Toast onClose={() => setIsCheckOut(false)} show={isCheckOut} delay={2000} autohide>
        All are checked out. Thanks
      </Toast>
      <Container>
        {
          cart.length === 0
            ? <div>There are no items in your cart.</div>
            : (
              <Row>
                <Col xs={7}>
                  <h2 className="d-flex">Cart</h2>
                  {
                    cart.map((product) => (
                      <CartItem key={product.id} product={product} />
                    ))
                  }
                </Col>

                <Col>
                  <h2 className="d-flex">Summanry</h2>
                  <Row>
                    <Col className="col-sm-1">Subtotal</Col>
                    <Col style={{ textAlign: 'end', paddingRight: '20%' }}>
                      {subtotal(cart)}
                    </Col>
                  </Row>
                  <Row>
                    <Col className="col-sm-1">Delivery</Col>
                    <Col style={{ textAlign: 'end', paddingRight: '20%' }}>
                      {dilivery}
                    </Col>
                  </Row>
                  <Divider />
                  <Row>
                    <Col className="col-sm-1">Total</Col>
                    <Col style={{ textAlign: 'end', paddingRight: '20%' }}>
                      {subtotal(cart) + dilivery}
                    </Col>
                  </Row>
                  <br />
                  <Button onClick={onCheckout}>
                    Check out
                  </Button>
                </Col>
              </Row>
            )
        }
      </Container>
    </>
  );
};

export default Cart;