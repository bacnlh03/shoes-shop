import React from "react";
import BannerComponent from "../../components/Banner";
import { Col, Container, Row } from "react-bootstrap";
import Product from "../../components/Product";

const Home = () => {
  return (
    <>
      <BannerComponent />
      <br />
      <Container fluid>
        <Row>
          <Col sm><Product /></Col>
          <Col sm><Product /></Col>
          <Col sm><Product /></Col>
        </Row>
        <br />
        <Row>
          <Col sm><Product /></Col>
          <Col sm><Product /></Col>
          <Col sm><Product /></Col>
        </Row>
        <br />
        <Row>
          <Col sm><Product /></Col>
          <Col sm><Product /></Col>
          <Col sm><Product /></Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;