import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

const Splash = () => {
  return (
    <Jumbotron fluid className="bg-dark text-white vh-100 mb-0 pb-0">
      <Container>
        <h1>Search and Favorite companies</h1>
        <p>Built with Django and React</p>
      </Container>
    </Jumbotron>
  );
};

export default Splash;
