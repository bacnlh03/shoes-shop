import React from "react";
import { Button, Col, Container, Dropdown, Form, InputGroup, Row } from "react-bootstrap";

import "./style.css";
import useProductStore from "../../features/product/productStore";

const SearchBar = ({ name, setName, onSearch, onReset }) => {
  const {
    sortProductByTime,
    sortProductByPriceAsc,
    sortProductByPriceDesc
  } = useProductStore();

  const handleSortProductByTime = async () => {
    await sortProductByTime();
  };

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
                <Form.Control
                  type="text"
                  placeholder="Look up name"
                  style={{
                    borderTopLeftRadius: '20px',
                    borderBottomLeftRadius: '20px'
                  }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <InputGroup.Text
                  className="btn-search"
                  style={{
                    paddingInline: '20px',
                    borderTopRightRadius: '20px',
                    borderBottomRightRadius: '20px',
                    cursor: 'pointer'
                  }}
                  onClick={onSearch}
                >
                  Search
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>
          </Form>
        </Col>

        <Col className="d-flex">
          <Button
            onClick={onReset}
            variant="outline" style={{ border: '1px solid' }}
          >
            Reset
          </Button>
        </Col>

        <Col className="d-flex justify-content-end">
          <Dropdown>
            <Dropdown.Toggle id="sort" variant="secondary-outline">
              Sort by
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={handleSortProductByTime}>
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