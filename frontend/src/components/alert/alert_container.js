import React, { useEffect, useState } from "react";
import { Container, Alert, Col, Fade } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import { closeMessage } from "../../actions/ui_action";

export const AlertContainer = ({ message }) => {
  const [show, setShow] = useState(() => Boolean(message));
  const dispatch = useDispatch();

  useEffect(() => {
    setShow(Boolean(message));
  }, [message]);

  const handleClose = (e) => {
    setShow(false);
    dispatch(closeMessage());
  };

  if (!message || !show) {
    return null;
  }
  return (
    <Container fluid>
      <Col>
        <Alert variant="success" onClose={handleClose} dismissible>
          {message}
        </Alert>
      </Col>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  message: state.ui.message,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AlertContainer);
