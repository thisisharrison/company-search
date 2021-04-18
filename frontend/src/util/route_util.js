import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

// routes for non logged in users only
const Auth = ({ component: Component, loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      !loggedIn ? (
        <Component {...props} />
      ) : (
        // Redirect to the companies page if the user is authenticated
        <Redirect to="/companies" />
      )
    }
  />
);

// routes for authenticated users only
const Protected = ({ component: Component, loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      loggedIn ? (
        <Component {...props} />
      ) : (
        // Redirect to the login page if the user is already authenticated
        <Redirect to="/account/login" />
      )
    }
  />
);

const mapStateToProps = (state) => ({
  loggedIn: state.session.isAuthenticated,
});

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
