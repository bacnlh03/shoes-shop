import React, { useEffect, useState } from "react";
import ProductService from "../../service/productService";

import image from "../../assets/shoes.png"
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const getProductById = async (id) => {
    ProductService.getById(id)
      .then(product => {
        console.log(product);
        setProduct(product)
      });
  };

  useEffect(() => {
    console.log('Get detail: ', id);
    getProductById(id)
  }, [id]);

  return (
    <Container fluid>
      <Row>
        <Col>
          <img src={image} alt={product.name} />
        </Col>

        <Col>
          <div>
            <div>{product.brand_id}</div>
            <div>{product.name}</div>
            <div>{product.gender_id ? 'Women' : 'Men'}'s Shoes</div>
            <div>{product.price}</div>
            <div>Discout: {product.discount}%</div>
            <div>
              <p>
                {product.details}
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;