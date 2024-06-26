import React, { useEffect } from "react";

import image from "../../assets/shoes.png"
import { useNavigate, useParams } from "react-router-dom";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import useProductStore from "../../features/product/productStore";
import useCartStore from "../../features/cart/cartStore";
import useAuthStore from "../../features/auth/authStore";
import useUserStore from "../../features/user/userStore";
import { formatCash } from "../../utils/formatCash";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      toast.warn('You must be logged in', {
        position: 'top-center',
        autoClose: 2000
      });
      setTimeout(() => {
        navigate('/login');
        return;
      }, 2500);
    } else {
      addToCart(selectedProduct)
        .then(() => {
          toast.success('Added product successfully', {
            position: 'top-center',
            autoClose: 2000
          })
          setTimeout(() => {
            window.location.reload();
          }, 2500);
        });
    }
  };

  if (isLoading) {
    return (
      <Spinner />
    );
  }

  return (
    <>
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

      <Container fluid>
        <Row>
          <Col xs={7}>
            <img src={image} alt={selectedProduct.name} />
          </Col>

          <Col>
            <div className="d-flex flex-column align-items-start">
              <h3>{selectedProduct.name}</h3>
              <h6>{selectedProduct.gender_id ? 'Women' : 'Men'}'s Shoes</h6>
              <h6>
                {
                  selectedProduct.discount !== 0
                    ? <div className="d-flex flex-row justify-content-center">
                      <div style={{ textDecoration: 'line-through', paddingRight: '5px' }}>
                        {formatCash(selectedProduct.price)}
                      </div>
                      <div>
                        {formatCash(selectedProduct.price * (100 - selectedProduct.discount) / 100)} VND
                      </div>
                    </div>
                    : <div>
                      <b>{formatCash(selectedProduct.price)}</b>
                    </div>
                }
              </h6>
              {
                selectedProduct.discount !== 0 && <div>Discout: {selectedProduct.discount}%</div>
              }
              <div>
                <p style={{ textAlign: 'start' }}>
                  {selectedProduct.details}
                </p>
              </div>
              <Button
                style={{ borderRadius: '20px', paddingInline: '20px' }}
                variant="primary"
                onClick={() => handleAddToCart(id)}
              >
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