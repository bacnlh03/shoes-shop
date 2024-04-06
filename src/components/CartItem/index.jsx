import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import productLogo from "../../assets/shoes.png";

const CartItem = ({ product }) => {
  console.log(product);

  return (
    <Container>
      <Row>
        <Image className="w-25 h-25" src={productLogo} alt={product.name} />

        <Col className="d-flex align-items-center">
          <Row>
            name
            price
          </Row>

          {product.gender ? 'Women' : 'Men'}'s Shoes
        </Col>
      </Row>
    </Container>
  );
};

export default CartItem;