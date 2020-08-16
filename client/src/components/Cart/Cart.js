import React, { Component } from 'react';
import { displayCart } from '../../actions/cartActions';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import './cart.scss';

export class Cart extends Component {

  constructor(props){
    super(props);
    this.displayCart = this.displayCart.bind(this);
  }

  displayCart(){
    this.props.displayCart();
  }

  render(){
    let { cartIsDisplayed, selectedItems, total} = this.props;
    return(
      <div className="c-onlineshop-cart" style={{transform: cartIsDisplayed ? 'translateX(-100%)' : 'none'}}>
        <i onClick={this.displayCart} className="fa fa-angle-double-right c-onlineshop-cart__close-icon"></i>
        <ul className="c-onlineshop-cart-item-list">
          {
            selectedItems && selectedItems.map((item, idx) => {
              return (
                <li className="c-onlineshop-cart-item-list__item" key={idx}>
                  <CartItem item={item}/>
                </li>
              )
            })
          }
        </ul>
        <div className="c-onlineshop-cart-total">
          <h6 className="c-onlineshop-cart-total__header">Order Summary</h6>
          <div className="c-onlineshop-cart-total__details">
            <button className="btn btn-primary">Check Out</button>
            <span>Total: ${total}</span>
          </div>
        </div>
      </div>
    )
  }
}

export function mapStateToProps(state){
  return {
    cartIsDisplayed: state.cart.cartIsDisplayed,
    selectedItems: state.cart.selectedItems,
    total: state.cart.total
  }
}

export function mapDispatchToProps(dispatch){
  return {
    displayCart: () => {
      dispatch(displayCart());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
