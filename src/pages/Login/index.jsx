import React, { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { ErrorMessage, Formik } from "formik";
import AuthService from "../../service/authService";
import { useNavigate } from "react-router-dom";
import loginSchema from "../../validation/login";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    'email': '',
    'password': ''
  }

  const onSubmit = async (values) => {
    setIsLoading(true);
    AuthService.login(values.email, values.password)
      .then(_ => {
        setIsLoading(false);
        navigate('/')
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  };

  return (
    <div style={{ position: 'absolute', left: '50%', top: '40%', transform: 'translate(-50%, -50%)' }}>
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
                  ? <Spinner animation="border" />
                  : 'Log In'
              }
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;