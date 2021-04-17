import React from "react";
import { connect } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar } from "react-bootstrap";
import { logoutUser } from "../../actions/session_action";

const mapStateToProps = ({ session }) => {
  const currentUser = session.user;
  const loggedIn = !!currentUser;
  return {
    currentUser,
    loggedIn,
  };
};

const mapDispatchToProps = (state) => (dispatch) => ({
  logoutUser: () => dispatch(logoutUser()),
});

const NavBarContainer = ({ currentUser, loggedIn, logoutUser }) => {
  const handleLogout = (e) => {
    e.preventDefault();
    logoutUser();
  };

  return (
    <Navbar bg="light" expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand>Company Search</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="navbar" />
      <Navbar.Collapse id="navbar">
        <Nav className="mr-auto">
          <LinkContainer to="/companies">
            <Nav.Link>Search</Nav.Link>
          </LinkContainer>
        </Nav>
        <Nav>
          {!loggedIn && (
            <>
              <LinkContainer to="/account/login">
                <Nav.Link>Log In</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/account/signup">
                <Nav.Link>Sign Up</Nav.Link>
              </LinkContainer>
            </>
          )}
          {loggedIn && (
            <>
              <Nav.Link as="button" onClick={handleLogout}>
                Log Out
              </Nav.Link>
              <LinkContainer to="/reset-password">
                <Nav.Link>Change Password</Nav.Link>
              </LinkContainer>
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
