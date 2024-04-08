import React from "react";
import { Col, Container, Dropdown, Form, InputGroup, Row } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";

import "./style.css";
import useProductStore from "../../features/product/productStore";

const SearchBar = () => {
  const {
    sortProductByPriceAsc,
    sortProductByPriceDesc
  } = useProductStore();

  const handleSortProductByPriceAsc = async () => {
    await sortProductByPriceAsc();
  };

  const handleSortProductByPriceDesc = async () => {
    await sortProductByPriceDesc();
  };

  return (
    <Container fluid className="px-5 pt-5">
      <Row className="justify-content-between">
        <Col>
          <Form>
            <Form.Group controlId="searchBar">
              <InputGroup>
                <InputGroup.Text
                  style={{
                    borderTopLeftRadius: '20px',
                    borderBottomLeftRadius: '20px'
                  }}
                >
                  <CiSearch />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Search..."
                  style={{
                    borderTopRightRadius: '20px',
                    borderBottomRightRadius: '20px'
                  }}
                />
              </InputGroup>
            </Form.Group>
          </Form>
        </Col>

        <Col className="d-flex justify-content-end">
          <Dropdown>
            <Dropdown.Toggle id="sort" variant="secondary-outline">
              Sort by
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                Newest
              </Dropdown.Item>

              <Dropdown.Item onClick={handleSortProductByPriceDesc}>
                Price: High - Low
              </Dropdown.Item>

              <Dropdown.Item onClick={handleSortProductByPriceAsc}>
                Price: Low - High
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBar;