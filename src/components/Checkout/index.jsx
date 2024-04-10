import { ErrorMessage, Formik } from "formik";
import React from "react";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import checkoutSchema from "../../validation/checkout";
import Divider from "../Divider";
import useCartStore from "../../features/cart/cartStore";
import { formatCash } from "../../utils/formatCash";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = ({ totalPrice, props }) => {
  const initialValues = {
    name: '',
    address: '',
    phone: ''
  };

  const { isLoading, handleCheckout } = useCartStore();

  const onSubmit = async () => {
    handleCheckout().then(() => {
      toast.success('Checkout successfully', {
        position: 'top-center',
        autoClose: 2000
      });
      setTimeout(() => {
        window.location.reload();
      }, 2500);
    });
  };

  const dilivery = 20000;

  return (
    <Row {...props}>
      <Col>
        <h2 style={{ textAlign: 'start' }}>
          Enter your name and address:
        </h2>
        <br />

        <Formik
          validationSchema={checkoutSchema}
          initialValues={initialValues}
          onSubmit={onSubmit}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="validationFormikName">
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    className="ms-3"
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    isValid={touched.name && !errors.name}
                  />
                </div>
                <ErrorMessage name="name" className="text-danger" component="div" />
                {!errors.name}
              </Form.Group>

              <Form.Group className="mb-3" controlId="validationFormikAddress">
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    className="ms-3"
                    type="address"
                    placeholder="Enter your address"
                    name="address"
                    value={values.address}
                    onChange={handleChange}
                    isValid={touched.address && !errors.address}
                  />
                </div>
                <ErrorMessage name="address" className="text-danger" component="div" />
                {!errors.address}
              </Form.Group>

              <Form.Group className="mb-3" controlId="validationFormikPhone">
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    className="ms-3"
                    type="phone"
                    placeholder="Enter your phone"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    isValid={touched.phone && !errors.phone}
                  />
                </div>
                <ErrorMessage name="phone" className="text-danger" component="div" />
                {!errors.phone}
              </Form.Group>

              <h2 style={{ textAlign: 'start' }}>
                Summary
              </h2>
              <Row>
                <Col className="col-sm-1">Subtotal</Col>
                <Col style={{ textAlign: 'end', paddingRight: '20%' }}>
                  {formatCash(totalPrice)}
                </Col>
              </Row>
              <Row>
                <Col className="col-sm-1">Delivery</Col>
                <Col style={{ textAlign: 'end', paddingRight: '20%' }}>
                  {formatCash(dilivery)}
                </Col>
              </Row>
              <Divider />
              <Row>
                <Col className="col-sm-1">Total</Col>
                <Col style={{ textAlign: 'end', paddingRight: '20%' }}>
                  {formatCash(totalPrice + dilivery)}
                </Col>
              </Row>

              <Button variant="primary" type="submit" formMethod="post" disabled={isLoading}>
                {
                  isLoading
                    ? <Spinner />
                    : 'Submit'
                }
              </Button>
            </Form>
          )}
        </Formik>
      </Col>
    </Row>
  );
};

export default Checkout;