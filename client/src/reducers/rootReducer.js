import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import catalogReducer from "./catalogReducer";
import cartReducer from "./cartReducer";

const appReducer = combineReducers({
  login: loginReducer,
  catalog: catalogReducer,
  cart: cartReducer
})

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_SUCCEEDED'){
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer;
