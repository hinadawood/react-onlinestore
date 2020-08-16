export const DISPLAY_CART = "DISPLAY_CART";

export function displayCart(){
  return {
    type: DISPLAY_CART
  }
}

export const ADD_TO_CART = "ADD_TO_CART";
export function addCartItem(item){
  return {
    type: ADD_TO_CART,
    payload: {
      itemToAdd: item
    }
  }
}

export const UPDATE_CART_ITEM = "UPDATE_CART_ITEM";
export function updateCartItem(id, quantity){
  return {
    type: UPDATE_CART_ITEM,
    payload: {
      id,
      quantity
    }
  }
}

export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
export function removeCartItem(id){
  return {
    type: REMOVE_CART_ITEM,
    payload: {
      id
    }
  }
}

export const UPDATE_CART_TOTAL = "UPDATE_CART_TOTAL";
export function updateCartTotal(){
  return {
    type: UPDATE_CART_TOTAL
  }
}


