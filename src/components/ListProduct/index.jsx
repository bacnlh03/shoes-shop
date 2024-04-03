import React from "react";
import { Container, Row } from "react-bootstrap";
import Product from "../Product";

const ListProduct = ({ products }) => {
  return (
    <Container fluid>
      {
        products.length === 0
          ? <div>Empty Product</div>
          : <Row xs={1} md={3} className="g-4">
            {
              products.map(product => (
                <Product key={product.id} product={product} />
              ))
            }
          </Row>
      }
    </Container>
  );
};

export default ListProduct;