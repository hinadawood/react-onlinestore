import React from 'react';
import QuantityEdit from '../Catalog/QuantityEdit';
import './cartitem.scss';
import { useDispatch } from 'react-redux';
import { removeCartItem, updateCartTotal } from '../../actions/cartActions';


const CartItem = (props) => {

    const dispatch = useDispatch();

    const deleteItem = () => {
        dispatch(removeCartItem(props.item.id));
        dispatch(updateCartTotal());      
    }

    let itemTotal = parseFloat(props.item.price) * props.item.qnty;
    itemTotal = itemTotal.toFixed(2);

    return (
        <div className="c-onlineshop-cart-item">
            <i onClick={deleteItem} className="fa fa-times icon c-onlineshop-cart-item__close-icon"></i>  
            <div className="c-onlineshop-cart-item-info">
                <div className="c-onlineshop-cart-item-info-summary">
                    <img className="c-onlineshop-cart-item-info-summary__image" 
                        src={`http://localhost:8080/${props.item.image}`} alt="product_image"/>
                    <span className="c-onlineshop-cart-item-info-summary__name">
                        {props.item.name}
                    </span>
                </div>
                <div className="c-onlineshop-cart-item-info-pricing">
                    <div className="c-onlineshop-cart-item-info-pricing-qty"> 
                        <QuantityEdit id={props.item.id} qnty={props.item.qnty}/> 
                    </div>
                    <div className="c-onlineshop-cart-item-info-pricing-calc"> 
                        <span className="c-onlineshop-cart-item-info-pricing-calc__qty">
                            {props.item.qnty}
                        </span>
                        <span className="c-onlineshop-cart-item-info-pricing-calc__for">
                            for
                        </span>
                        <span className="c-onlineshop-cart-item-info-pricing-calc__price">
                            ${props.item.price}
                        </span>
                        <span className="c-onlineshop-cart-item-info-pricing-calc__total-price">
                            ${itemTotal}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;