import React from "react";
import { Accordion, Form } from "react-bootstrap";

import "./style.css";

const FilterBar = ({ gender, setGender, kids, setKids, priceGroup, setPriceGroup }) => {
  const handleSetGender = (gender) => {
    setGender(prev => (prev === gender) ? null : gender);
  };

  const handleSetKids = (kids) => {
    setKids(prev => (prev === kids) ? null : kids);
  };

  const handleSetPriceGroup = (priceGroup) => {
    setPriceGroup(prev => (prev === priceGroup) ? null : priceGroup);
  };

  return (
    <Form>
      <Accordion className="flex-column align-items-start" alwaysOpen>
        <Accordion.Item eventKey="gender">
          <Accordion.Header>Gender</Accordion.Header>
          <Accordion.Body>
            <Form.Check
              type="checkbox"
              label="Male"
              name="gender"
              checked={gender === 0}
              onChange={() => handleSetGender(0)}
            />
            <Form.Check
              type="checkbox"
              label="Female"
              name="gender"
              checked={gender === 1}
              onChange={() => handleSetGender(1)}
            />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="kids">
          <Accordion.Header>Kids</Accordion.Header>
          <Accordion.Body>
            <Form.Check
              type="checkbox"
              label="Boys"
              name="kids"
              checked={kids === 0}
              onChange={() => handleSetKids(0)}
            />
            <Form.Check
              type="checkbox"
              label="Girls"
              name="kids"
              checked={kids === 1}
              onChange={() => handleSetKids(1)}
            />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="price">
          <Accordion.Header>Shop By Price</Accordion.Header>
          <Accordion.Body>
            <Form.Check
              type="checkbox"
              label="Under 1,000,000đ"
              name="price"
              checked={priceGroup === 0}
              onChange={() => handleSetPriceGroup(0)}
            />
            <Form.Check
              type="checkbox"
              label="1,000,000đ - 2,000,000đ"
              name="price"
              checked={priceGroup === 1}
              onChange={() => handleSetPriceGroup(1)}
            />
            <Form.Check
              type="checkbox"
              label="2,000,000đ - 3,000,000đ"
              name="price"
              checked={priceGroup === 2}
              onChange={() => handleSetPriceGroup(2)}
            />
            <Form.Check
              type="checkbox"
              label="3,000,000đ - 4,000,000đ"
              name="price"
              checked={priceGroup === 3}
              onChange={() => handleSetPriceGroup(3)}
            />
            <Form.Check
              type="checkbox"
              label="4,000,000đ - 5,000,000đ"
              name="price"
              checked={priceGroup === 4}
              onChange={() => handleSetPriceGroup(4)}
            />
            <Form.Check
              type="checkbox"
              label="Over 5,000,000đ"
              name="price"
              checked={priceGroup === 5}
              onChange={() => handleSetPriceGroup(5)}
            />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Form>
  );
};

export default FilterBar;