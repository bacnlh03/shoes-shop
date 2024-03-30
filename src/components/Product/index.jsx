import React from "react";
import { Card } from "react-bootstrap";

import product from '../../assets/shoes.png';

const Product = () => {
  return (
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={product} />
      <Card.Body>
        <Card.Title>Name</Card.Title>
        <Card.Text>Men's Shoes</Card.Text>
        <Card.Text>
          <b>$9,999</b>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;