import React, { useState, useEffect} from 'react';
import './quantityedit.scss';
import { updateCartItem, removeCartItem, updateCartTotal } from '../../actions/cartActions';
import { useDispatch } from 'react-redux';

const QuantityEdit = (props) => {

  const [qnty, setQnty] = useState(props);

  useEffect(() => {
    setQnty(props.qnty);
  }, [props.qnty]);

  const dispatch = useDispatch();

  const incCartItem = () => {
    if (props.qnty) {
      dispatch(updateCartItem(props.id, props.qnty + 1));
      dispatch(updateCartTotal());   
    } else {
      dispatch(updateCartItem(props.id, 1));
      dispatch(updateCartTotal());   
    }   
  }

  const decCartItem = () => {
    if (props.qnty > 1) {
      dispatch(updateCartItem(props.id, props.qnty - 1));
      dispatch(updateCartTotal());   
    } else {
      dispatch(removeCartItem(props.id));
      dispatch(updateCartTotal());   
    }    
  }

  const isValid = (newQntyValue) => {
    return /^[\d ]*$/.test(newQntyValue);
  }

  const handleChange = (event) => {
    let newQntyValue = event.target.value;
    newQntyValue = newQntyValue ? parseInt(newQntyValue) : ""
    if (isValid(newQntyValue)){
      setQnty(newQntyValue);
      dispatch(updateCartItem(props.id, newQntyValue))
    }
  }

  return(
    <div className="c-onlineshop-quantity-editor">
      <button class="c-onlineshop-quantity-editor__incr-btn btn btn-primary" 
         onClick={incCartItem}>
           <i className="fa fa-plus icon"></i>
      </button>
      <input class="c-onlineshop-quantity-editor__input" size="4"
        onChange={handleChange} value={qnty}/>
      <button class="c-onlineshop-quantity-editor__decr-btn btn btn-primary"
        onClick={decCartItem}>
          <i className="fa fa-minus icon"></i>
      </button>
    </div>
  )
}

export default QuantityEdit
