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
    <>
      <Toast show={error !== null} delay={1000} autohide>
        {error}
      </Toast>
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
    </>
  );
};

export default ListProduct;