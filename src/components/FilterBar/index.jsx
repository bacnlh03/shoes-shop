import React from "react";
import { Accordion, Form } from "react-bootstrap";

import "./style.css";

const FilterBar = () => {
  return (
    <Form>
      <Accordion className="flex-column align-items-start" alwaysOpen>
        <Accordion.Item eventKey="gender">
          <Accordion.Header>Gender</Accordion.Header>
          <Accordion.Body>
            <Form.Check
              type="checkbox"
              label="Male"
            />
            <Form.Check
              type="checkbox"
              label="Female"
            />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="kids">
          <Accordion.Header>Kids</Accordion.Header>
          <Accordion.Body>
            <Form.Check
              type="checkbox"
              label="Boys"
            />
            <Form.Check
              type="checkbox"
              label="Girls"
            />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="price">
          <Accordion.Header>Shop By Price</Accordion.Header>
          <Accordion.Body>
            <Form.Check
              type="radio"
              label="Under 1,000,000đ"
              name="price"
            />
            <Form.Check
              type="radio"
              label="1,000,000đ - 2,000,000đ"
              name="price"
            />
            <Form.Check
              type="radio"
              label="2,000,000đ - 3,000,000đ"
              name="price"
            />
            <Form.Check
              type="radio"
              label="3,000,000đ - 4,000,000đ"
              name="price"
            />
            <Form.Check
              type="radio"
              label="4,000,000đ - 5,000,000đ"
              name="price"
            />
            <Form.Check
              type="radio"
              label="Over 5,000,000đ"
              name="price"
            />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Form>
  );
};

export default FilterBar;