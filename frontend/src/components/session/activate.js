import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { activateUser } from "../../actions/session_action";

export const Activate = ({ uid, token, activateUser, history }) => {
  const handleClick = () => {
    activateUser({ uid, token });
    history.push("/account/login");
  };
  return (
    <Container>
      <Row>
        <Col>
          <h2>Activate Your Account</h2>
          <Button onClick={handleClick}>Activate</Button>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state, ownProps) => ({
  uid: ownProps.match.params.uid,
  token: ownProps.match.params.token,
});

const mapDispatchToProps = (dispatch) => ({
  activateUser: (data) => dispatch(activateUser(data)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Activate)
);
