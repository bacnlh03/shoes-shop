import React from "react";
import { Card } from "react-bootstrap";

import image from '../../assets/shoes.png';
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`/detail/${product.id}`)} style={{ cursor: 'pointer' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.details}</Card.Text>
        <Card.Text>
          <b>{product.price} VND</b>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;