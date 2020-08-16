import React from "react";
import Login from "./components/Login/Login";
import Catalog from "./components/Catalog/Catalog";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { useSelector } from "react-redux";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import "./app.scss";

const App = (props) => {
  const signin = useSelector((state) => state.login.signin);
  return (
    <Router>
      <Header/>
      <div className="l-onlineshop-page">
        <Switch>
          <Route exact path="/login" component={Login}/>
          <PrivateRoute path="/catalog" authed={signin} component={Catalog}/>
          <Route path="*">
            <Redirect to="/login" />
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
