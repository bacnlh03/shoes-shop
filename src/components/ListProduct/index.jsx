import React from "react";
import { Container, Row, Spinner, Toast } from "react-bootstrap";
import Product from "../Product";

const ListProduct = ({ products, isLoading, error }) => {
  if (isLoading) {
    return (
      <Spinner />
    );
  }

  return (
    <Container>
      <Toast show={error !== null} delay={1000} autohide>
        {error}
      </Toast>
      {
        products.length === 0
          ? <div>Empty Product</div>
          : <Row md={3}>
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