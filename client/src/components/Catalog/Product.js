import React from 'react';
import './product.scss';
import { addCartItem, updateCartTotal} from '../../actions/cartActions';
import _ from 'underscore';
import {useSelector, useDispatch} from 'react-redux';
import QuantityEdit from './QuantityEdit';

const Product = (props) => {
  const quantity = useSelector(state => getQuantity(state.cart.selectedItems, props.item.id));
  const dispatch = useDispatch();

  const addToCart = (item) => {
    dispatch(addCartItem({...item, qnty: 1}));
    dispatch(updateCartTotal());   
  }

  return(
    <div className={"c-onlineshop-product-card" + (!props.item.stockAvailable ? " disabled" : "")}>
      <img className="c-onlineshop-product-card__image" 
        src={`http://localhost:8080/${props.item.image}`} alt="product_image"/>
      <div className="c-onlineshop-product-card__brand-n-name" >{props.item.name}</div>
      {
        !props.item.stockAvailable ? <div className="c-onlineshop-product-card__unavailable" >Out of stock</div> : null
      }
      <div className="c-onlineshop-product-card__price" >${props.item.price}</div>
      {
        (quantity === "" || quantity > 0) ? <QuantityEdit id={props.item.id} qnty={quantity}/> :
        <button disabled={!props.item.stockAvailable} className="c-onlineshop-product-card__btn btn btn-primary" 
         onClick={() => addToCart(props.item)}>Add to cart </button>
      }
    </div>
  )
}

const getQuantity = (cartItemsArray, id) => {
  let item = _.find(cartItemsArray, {id: id});
  if (!item) return 0;
  return item.qnty;
}

export default Product;
