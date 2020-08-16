import {LOGIN_SUCCEEDED, LOGIN_FAILED, LOGOUT_SUCCEEDED} from '../actions/loginActions';

export default function loginReducer(state = {
  signin: false,
  signout: false,
  isLoginError: false
}, action = null){
  switch(action.type){
    case LOGIN_SUCCEEDED:
      return {
        ...state,
        signin: true,
        signout: false,
        isLoginError: false
      }
    case LOGIN_FAILED:
      return {
        ...state,
        signin: false,
        signout: false,
        isLoginError: true
      }
    case LOGOUT_SUCCEEDED:
      return {
        ...state,
        signin: false,
        signout: true,
        isLoginError: false
      }
    default:
      return state;
  }
}
