import React from "react";
import { Button, Form, Spinner, Toast } from "react-bootstrap";
import { ErrorMessage, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import loginSchema from "../../validation/login";
import useAuthStore from "../../features/auth/authStore";

const Login = () => {
  const navigate = useNavigate();
  const { isLoading, error, login } = useAuthStore();

  const initialValues = {
    'email': '',
    'password': ''
  }

  const onSubmit = (values) => {
    login(values).then(() => navigate('/'));
  };

  return (
    <div style={{ position: 'absolute', left: '50%', top: '40%', transform: 'translate(-50%, -50%)' }}>
      <Toast show={error !== null} delay={1000} autohide>
        {error}
      </Toast>

      <h2>Enter your information to login</h2>
      <br />

      <Formik
        validationSchema={loginSchema}
        onSubmit={onSubmit}
        initialValues={initialValues}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="validationFormikEmail">
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className="ms-3"
                  type="email"
                  placeholder="youremail@gmail.com"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isValid={touched.email && !errors.email}
                />
              </div>
              <ErrorMessage name="email" className="text-danger" component="div" />
              {!errors.email}
            </Form.Group>

            <Form.Group className="mb-3" controlId="validationFormikPassword">
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className="ms-3"
                  type="password"
                  placeholder="12345678"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  isValid={touched.password && !errors.password}
                />
              </div>
              <ErrorMessage name="password" className="text-danger" component="div" />
              {!errors.password}
            </Form.Group>

            <Button variant="primary" type="submit" formMethod="post" disabled={isLoading}>
              {
                isLoading
                  ? <Spinner />
                  : 'Log In'
              }
            </Button>
          </Form>
        )}
      </Formik>

      <h6>Don't have account? <a href="/register">Register</a></h6>
    </div>
  );
};

export default Login;