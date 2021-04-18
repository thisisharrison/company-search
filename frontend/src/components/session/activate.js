import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { activateUser } from "../../actions/session_action";

export const Activate = ({ uid, token, activateUser, history, errors }) => {
  const [hasErrors, setHasErrors] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length) {
      setHasErrors(true);
    } else {
      setHasErrors(false);
    }
  }, [errors]);

  const handleClick = (e) => {
    e.preventDefault();
    activateUser({ uid, token });
    history.push("/account/login");
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="mt-3">Activate Your Account</h2>
          {hasErrors && (
            <Alert variant="danger">
              <ul>
                {Object.keys(errors).map((field) => {
                  return (
                    <li key={field}>
                      {field}: {errors[field]}
                    </li>
                  );
                })}
              </ul>
            </Alert>
          )}
          <Button onClick={handleClick}>Activate</Button>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state, ownProps) => {
  const uid = ownProps.match.params.uid;
  const token = ownProps.match.params.token;
  const errors = state.errors.session;
  return {
    uid,
    token,
    errors,
  };
};

const mapDispatchToProps = (dispatch) => ({
  activateUser: (data) => dispatch(activateUser(data)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Activate)
);
