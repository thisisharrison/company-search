import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const SessionForm = ({ formType }) => {
  const [formData, setFormData] = useState({});

  const header = {
    login: "Log In to Company Search",
    signup: "Create an Account",
    reset_password: "Reset Password",
  };

  const handleChange = (e) => {
    const update = { [e.target.name]: e.target.value };
    setFormData(Object.assign({}, formData, update));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Container>
      <Row className="mt-3 mb-3">
        <Col>
          <h2>{header[formType]}</h2>
        </Col>
      </Row>
      <Row>
        <Form style={{ width: "100%" }} onSubmit={handleSubmit}>
          {formType !== "reset_password" && (
            <Col xs="12">
              <Form.Group controlId={`${formType}Username`}>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  name="username"
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          )}

          {(formType === "signup" || formType === "reset_password") && (
            <Col xs="12">
              <Form.Group controlId={`${formType}Email`}>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          )}

          {formType !== "reset_password" && (
            <Col xs="12">
              <Form.Group controlId={`${formType}Password`}>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
                {formType === "login" && (
                  <Form.Text className="text-muted">
                    <Link to="/reset-password">Forgot Password?</Link>
                  </Form.Text>
                )}
              </Form.Group>
            </Col>
          )}

          <Col>
            <Button variant="primary" type="submit">
              {formType === "reset_password"
                ? "Send Me Instructions"
                : "Submit"}
            </Button>
          </Col>
        </Form>
      </Row>

      <Row className="mt-5">
        <Col className="text-muted">
          {formType === "signup" ? (
            <p>
              Already have an account? Login{" "}
              <Link to="/account/login">here</Link>
            </p>
          ) : formType === "login" ? (
            <p>
              Do not have an account? Sign Up{" "}
              <Link to="/account/signup">here</Link>
            </p>
          ) : null}
        </Col>
      </Row>
    </Container>
  );
};

export default SessionForm;
