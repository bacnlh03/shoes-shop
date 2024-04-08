import React, { useEffect } from "react";

import image from "../../assets/shoes.png"
import { useNavigate, useParams } from "react-router-dom";
import { Button, Col, Container, Row, Spinner, Toast } from "react-bootstrap";
import useProductStore from "../../features/product/productStore";
import useCartStore from "../../features/cart/cartStore";
import useAuthStore from "../../features/auth/authStore";
import useUserStore from "../../features/user/userStore";

const ProductDetail = () => {
  const { id } = useParams();
  const { selectedProduct, isLoading, error, getProductById } = useProductStore();
  const { addToCart } = useCartStore();

  const { token } = useAuthStore();
  const { user } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Get detail: ', id);
    getProductById(id);
  }, [getProductById, id]);

  const handleAddToCart = async () => {
    if (!token || !user) {
      navigate('/login');
    }

    addToCart(selectedProduct)
      .then(() => window.location.reload());
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