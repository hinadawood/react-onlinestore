import React from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

/*
Checks for token in the localStorage to keep user logged in after page refresh.
If the token has expired then backend will throw 401 and client
redirects to login page (See actions/apiWrapper.js)
Please note that for high security websites we can implement refresh tokens/silent
logins to prevent XSRF attacks due to localStorage and cookies vulnerability
*/
function PrivateRoute({component: Component, authed, ...rest}){
  let token = localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={
        props => authed || token ? <Component {...props}/> : <Redirect to="/login"/>
      }
    />
  );
}

export default PrivateRoute;
