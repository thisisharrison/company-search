import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./nav/navbar";
import Splash from "./splash/splash";
import MainPage from "./main/main_page_container";
import Login from "./session/login_container";
import SignUp from "./session/signup_container";

const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Splash} />
      <Route exact path="/companies" component={MainPage} />
      <Route exact path="/account/login" component={Login} />
      <Route exact path="/account/signup" component={SignUp} />
      {/* <Route exact path='/reset-password' component={ResetPassword} />
      <Route exact path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm} />
      <Route exact path='/activate/:uid/:token' component={Activate} /> */}
    </Switch>
  </div>
);

export default App;
