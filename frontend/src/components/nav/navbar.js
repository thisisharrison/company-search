import React from "react";
import { connect } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar } from "react-bootstrap";
import { logout } from "../../actions/session_action";
import { withRouter } from "react-router";

const mapStateToProps = ({ session }) => {
  const user = session.user;
  const loggedIn = session.isAuthenticated;
  return {
    user,
    loggedIn,
  };
};

const mapDispatchToProps = (state) => (dispatch) => ({
  logout: () => dispatch(logout()),
});

const NavBarContainer = ({ user, loggedIn, logout, history }) => {
  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    history.push("/");
  };

  return (
    <Navbar bg="light" expand="md">
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
              <Navbar.Text>
                | Signed in as: {user ? user.username : null}
              </Navbar.Text>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NavBarContainer)
);
