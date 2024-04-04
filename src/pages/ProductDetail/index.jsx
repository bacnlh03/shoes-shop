import React, { useEffect } from "react";

import image from "../../assets/shoes.png"
import { useParams } from "react-router-dom";
import { Button, Col, Container, Row, Spinner, Toast } from "react-bootstrap";
import useProductStore from "../../features/product/productStore";

const ProductDetail = () => {
  const { id } = useParams();
  const { selectedProduct, isLoading, error, getProductById } = useProductStore();

  useEffect(() => {
    console.log('Get detail: ', id);
    getProductById(id)
  }, [getProductById, id]);

  const handleAddToCart = (id) => {
    console.log(`Add to cart: ${id}`);
  };

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
        <Row>
          <Col>
            <img src={image} alt={selectedProduct.name} />
          </Col>

          <Col>
            <div>
              <div>{selectedProduct.brand_id}</div>
              <div>{selectedProduct.name}</div>
              <div>{selectedProduct.gender_id ? 'Women' : 'Men'}'s Shoes</div>
              <div>{selectedProduct.price}</div>
              <div>Discout: {selectedProduct.discount}%</div>
              <div>
                <p>
                  {selectedProduct.details}
                </p>
              </div>
              <Button variant="outline-primary" onClick={() => handleAddToCart(id)}>
                Add to Cart
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetail;