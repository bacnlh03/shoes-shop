import { ErrorMessage, Formik } from "formik";
import React, { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import registerSchema from "../../validation/register";
import { useNavigate } from "react-router-dom";
import AuthService from "../../service/authService";

const Register = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    'email': '',
    'username': '',
    'password': '',
    'confirmPassword': '',
  };

  const handleSubmit = async (values) => {
    setIsLoading(true);
    AuthService.register(values.email, values.username, values.password, values.confirmPassword)
      .then(_ => {
        setIsLoading(false);
        navigate('/');
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  };

  return (
    <div style={{ position: 'absolute', left: '50%', top: '40%', transform: 'translate(-50%, -50%)' }}>
      <h2>Enter your information to register</h2>
      <br />

      <Formik
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
        initialValues={initialValues}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
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

            <Form.Group className="mb-3" controlId="formBasicText">
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  className="ms-3"
                  type="text"
                  placeholder="Your username"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  isValid={touched.username && !errors.username}
                />
              </div>
              <ErrorMessage name="username" className="text-danger" component="div" />
              {!errors.username}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
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

            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Form.Label>Confirm password</Form.Label>
                <Form.Control
                  className="ms-3"
                  type="password"
                  placeholder="12345678"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  isValid={touched.confirmPassword && !errors.confirmPassword}
                />
              </div>
              <ErrorMessage name="confirmPassword" className="text-danger" component="div" />
              {!errors.confirmPassword}
            </Form.Group>

            <Button variant="primary" type="submit" formMethod="post" disabled={isLoading}>
              {
                isLoading
                  ? <Spinner animation="border" />
                  : 'Register'
              }
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;