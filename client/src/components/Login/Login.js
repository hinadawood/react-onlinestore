import React, { Component } from "react";
import "./login.scss";
import { performLogin } from "../../actions/loginActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSignIn(e) {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.performLogin(username, password);
  }


  render() {
    
    let token = localStorage.getItem("token");
    if (this.props.signin || token) {
      return <Redirect to="/catalog" />;
    } else {
      return (
        <div className="c-login-panel">
          <Form className="c-login-panel-form" onSubmit={this.handleSignIn}>
            <Form.Group>
              <Form.Label>User name:</Form.Label>
              <Form.Control
                required
                type="text"
                name="username"
                placeholder="Enter your user name"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password:</Form.Label>
              <Form.Control
                required
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={this.handleChange}
              />
            </Form.Group>
            <div className="c-login-panel__submit-btn">
              <Button variant="success" type="submit">
                Sign In
              </Button>
            </div>
          </Form>
          {this.props.isLoginError && (
            <div className="c-login-panel__error-message">
              Username or Password incorrect
            </div>
          )}
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    signin: state.login.signin,
    isLoginError: state.login.isLoginError,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    performLogin: (username, password) => {
      dispatch(performLogin(username, password));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
