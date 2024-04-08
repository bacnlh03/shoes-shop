import React from "react";
import { Card } from "react-bootstrap";

import image from '../../assets/shoes.png';
import { useNavigate } from "react-router-dom";
import { formatCash } from "../../utils/formatCash";

const Product = ({ product }) => {
  const navigate = useNavigate();

  const handleCardClick = (product) => {
    navigate(`/detail/${product.id}`)
  }

  return (
    <Card onClick={() => handleCardClick(product)} style={{ cursor: 'pointer' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.details}</Card.Text>
        <Card.Text>
          <b>{formatCash(product.price)} VND</b>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;