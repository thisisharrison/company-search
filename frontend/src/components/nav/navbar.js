import React from "react";
import { connect } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar } from "react-bootstrap";

const mapStateToProps = ({ session }) => {
  const currentUser = session.user;
  const loggedIn = !!currentUser;
  return {
    currentUser,
    loggedIn,
  };
};

const mapDispatchToProps = {};

const NavBarContainer = ({ currentUser, loggedIn }) => {
  return (
    <Navbar bg="light" expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand>Company Search</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="navbar" />
      <Navbar.Collapse id="navbar">
        <Nav className="mr-auto">
          <LinkContainer to="/companies">
            <Nav.Link href="#home">Companies</Nav.Link>
          </LinkContainer>
        </Nav>
        <Nav>
          {!loggedIn && (
            <>
              <LinkContainer to="/account/login">
                <Nav.Link href="#home">Log In</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/account/signup">
                <Nav.Link href="#link">Sign Up</Nav.Link>
              </LinkContainer>
            </>
          )}
          {loggedIn && (
            <>
              <Nav.Link as="button">Log Out</Nav.Link>
              <Nav.Link>Change Password</Nav.Link>
            </>
          )}
          <Navbar.Text className="ml-5">
            Signed in as: {currentUser.username}
          </Navbar.Text>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer);
