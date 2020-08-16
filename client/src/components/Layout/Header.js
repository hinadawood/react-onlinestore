import React, { Component } from "react";
import "./header.scss";
import { Redirect } from "react-router-dom";
import { logout } from "../../actions/loginActions";
import { displayCart } from "../../actions/cartActions";
import { connect } from "react-redux";

class Header extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.displayCart = this.displayCart.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
  }

  logout() {
    this.props.logout();
  }

  displayCart() {
    this.props.displayCart();
  }

  renderRedirect() {
    if (this.props.signout) {
      return <Redirect to="/login" />;
    }
  }

  render() {
    const { signin } = this.props;
    let token = localStorage.getItem("token");
    return (
      <nav className="c-onlineshop-header">
        <span className="c-onlineshop-header__logo">
          <img src={`http://localhost:8080/logo.png`} alt="product_image" />
        </span>
        <span className="c-onlineshop-header__company-name">
          ABC Online Store
        </span>
        {this.renderRedirect()}
        {signin || token ? (
          <ul className="c-onlineshop-header-menu">
            <li className="c-onlineshop-header-menu__option"
              onClick={this.displayCart}>
              <button className="btn btn-primary">
                <span className="cart-label">View Cart</span> 
                <i className="fa fa-shopping-cart cart-icon"></i>
              </button>
            </li>
            <li className="c-onlineshop-header-menu__option"
              onClick={this.logout}>
              Logout
            </li>
          </ul>
        ) : null}
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    signin: state.login.signin,
    signout: state.login.signout,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => {
      dispatch(logout());
    },
    displayCart: () => {
      dispatch(displayCart());
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
