import React from "react";
import { Card } from "react-bootstrap";

import image from '../../assets/shoes.png';
import { useNavigate } from "react-router-dom";
import { formatCash } from "../../utils/formatCash";

import "./style.css";

const Product = ({ product }) => {
  const navigate = useNavigate();

  const handleCardClick = (product) => {
    navigate(`/detail/${product.id}`)
  }

  return (
    <Card onClick={() => handleCardClick(product)} style={{ cursor: 'pointer' }}>
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', top: '5px', right: '5px' }}>
          {product.discount !== 0 &&
            <div
              style={{
                backgroundColor: 'aquamarine',
                paddingInline: '10px',
                paddingBlock: '4px',
                borderRadius: '5px'
              }}
            >
              {product.discount}%
            </div>}
        </div>
        <Card.Img variant="top" src={image} />
      </div>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {
            product.discount !== 0
              ? (
                <div className="d-flex flex-row justify-content-center">
                  <div style={{ textDecoration: 'line-through', paddingRight: '5px' }}>
                    {formatCash(product.price)}
                  </div>
                  <div>
                    <b>{formatCash(product.price * (100 - product.discount) / 100)} VND</b>
                  </div>
                </div>
              )
              : (
                <div>
                  <b>{formatCash(product.price)} VND</b>
                </div>
              )
          }
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;