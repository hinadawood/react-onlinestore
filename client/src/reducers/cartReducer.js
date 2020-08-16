import {
  DISPLAY_CART,
  ADD_TO_CART,
  UPDATE_CART_ITEM,
  REMOVE_CART_ITEM,
  UPDATE_CART_TOTAL
} from '../actions/cartActions';

export default function cartReducer(state = {
  cartIsDisplayed: false,
  selectedItems: [],
  total: 0
}, action = null){
  switch(action.type) {
    case DISPLAY_CART:
      return {
        ...state,
        cartIsDisplayed: !state.cartIsDisplayed
      }
    case ADD_TO_CART:
      return {
        ...state,
        selectedItems: [action.payload.itemToAdd, ...state.selectedItems]
      }
    case UPDATE_CART_ITEM:
      return {
        ...state,
        selectedItems: state.selectedItems.map((item) => {
          if (item.id === action.payload.id){
            return {...item, qnty: action.payload.quantity}
          }
          return item;
        })
      }
    case REMOVE_CART_ITEM:
      return {
        ...state,
        selectedItems: state.selectedItems.filter((item) => item.id !== action.payload.id)
      }
    case UPDATE_CART_TOTAL:
      return {
        ...state,
        total: (state.selectedItems.reduce((sum, item) => sum + parseInt(item.qnty) * parseFloat(item.price), 0)).toFixed(2)
      }
    default:
    return state;
  }
}
