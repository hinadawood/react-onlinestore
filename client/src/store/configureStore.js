import { createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import rootReducer from "../reducers/rootReducer";
import thunk from "redux-thunk";

const initialState = {
  login: {
    signin: false,
    signout: false,
    isLoginError: false
  },
  catalog: {
    items: [],
    isCatalogError: false
  },
  cart: {
    cartIsDisplayed: false,
    selectedItems: [],
    total: 0
  }
}

export default function configureStore() {
  return createStore(rootReducer, initialState, applyMiddleware(thunk, logger));
}
