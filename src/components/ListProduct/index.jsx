import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import Product from "../Product";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ListProduct = ({ products, isLoading, error }) => {
  if (isLoading) {
    return (
      <Spinner />
    );
  }

  return (
    <Container>
      {
        error && (
          <ToastContainer
            position="top-right"
            autoClose={false}
            bodyClassName={{ type: 'error' }}
          >
            {error}
          </ToastContainer>
        )
      }
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