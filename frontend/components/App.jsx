import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import HomeContainer from "./home/home_container";

const App = () => (
  <div>
    <header>
      <link
        href="https://fonts.googleapis.com/css?family=Noto+Sans"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans|Roboto:700"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:500"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:300|Poppins:300|Source+Sans+Pro:600"
        rel="stylesheet"
      />
    </header>
    <ProtectedRoute exact path="/home" component={HomeContainer} />
    <AuthRoute exact path="/" component={GreetingContainer} />
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;