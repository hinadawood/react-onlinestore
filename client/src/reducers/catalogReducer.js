import {
  FETCH_CATALOG_SUCCEEDED,
  FETCH_CATALOG_FAILED
} from '../actions/catalogActions';

export default function catalogReducer(state = {
  items: [],
  isCatalogError: false
}, action = null){
  switch(action.type) {
    case FETCH_CATALOG_SUCCEEDED:
      return {
        ...state,
        items: action.payload.items,
        isCatalogError: false
      }
    case FETCH_CATALOG_FAILED:
      return {
        ...state,
        items: [],
        isCatalogError: true
      }
      default:
    return state;
  }
}
