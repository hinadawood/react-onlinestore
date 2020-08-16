import loginReducer from './loginReducer';
import * as actions from '../actions/loginActions';

describe('Login Reducer', () => {
    it('should handle LOGIN_SUCCEEDED', () => {
        const testObj = {
            signin: true,
            signout: false,
            isLoginError: false
        }
        expect(loginReducer({}, {
            type: actions.LOGIN_SUCCEEDED,
        })).toEqual({
            ...testObj
        })
    });
    it('should handle LOGIN_FAILED', () => {
        const testObj = {
            signin: false,
            signout: false,
            isLoginError: true
        }
        expect(loginReducer({}, {
            type: actions.LOGIN_FAILED,
        })).toEqual({
            ...testObj
        })
    });
    it('should handle LOGOUT_SUCCEEDED', () => {
        const testObj = {
            signin: false,
            signout: true,
            isLoginError: false
        }
        expect(loginReducer({}, {
            type: actions.LOGOUT_SUCCEEDED,
        })).toEqual({
            ...testObj
        })
    });
})