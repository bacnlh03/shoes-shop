import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Product from "../Product";

const ListProduct = ({ products }) => {
  return (
    <Container fluid>
      {
        products.length === 0
          ? <div>Empty Product</div>
          : <Row xs={1} md={2} className="g-4">
            {
              products.map(product => (
                <Col>
                  <Product key={product.id} product={product} />
                </Col>
              ))
            }
          </Row>
      }
    </Container>
  );
};

export default ListProduct;