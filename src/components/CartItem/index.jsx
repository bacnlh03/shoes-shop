import React from "react";
import productLogo from "../../assets/shoes.png";
import removeLogo from "../../assets/delete.svg";
import { Col, Container, Image, Row } from "react-bootstrap";
import useCartStore from "../../features/cart/cartStore";
import Divider from "../Divider";
import { formatCash } from "../../utils/formatCash";

const CartItem = ({ product }) => {
  const { removeFromCart } = useCartStore();

  const removeProduct = async (product) => {
    removeFromCart(product).then(() => window.location.reload());
  };

  return (
    <Container>
      <Col>
        <Row>
          <Col>
            <Image src={productLogo} alt={product.name} style={{ width: '70%' }} />
          </Col>

          <Col className="align-self-start">
            <b className="d-flex">{product.name}</b>
            <div className="d-flex">{product.gender_id ? 'Women' : 'Men'}'s Shoes</div>
            <img
              onClick={() => { removeProduct(product) }}
              className="d-flex"
              src={removeLogo}
              alt="remove"
              style={{ width: '25px', cursor: 'pointer' }} />
          </Col>

          <Col style={{ textAlign: 'end' }}>
            <b>{formatCash(product.price)} VND</b>
          </Col>
        </Row>
      </Col>
      <Divider className="d-inline" />
    </Container>
  );
};

export default CartItem;