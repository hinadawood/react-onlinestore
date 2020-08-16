import React from "react";
import { shallow } from "enzyme";
import { Login, mapStateToProps, mapDispatchToProps} from "./Login";
import renderer from 'react-test-renderer';


let component;

const buildComponent = (props = {
  username: '',
  password: '',
  performLogin: jest.fn()
}) => {
  component = shallow(<Login {...props} />);
  return component;
};

describe('test suite for login form', () => {
    beforeEach(() => {
      buildComponent();
    });
  
    it('should render component properly', () => {
      expect(component).toBeDefined();
    });
  });

  describe('test change event for login form username', () => {
    beforeEach(() => {
      buildComponent();
      component.find('FormControl').at(0).simulate('change', {target: {value: 'jane', name: 'username'}})
    });
  
    it('should update username', () => {
      expect(component.state().username).toEqual('jane')
    })
  });

  describe('test change event for login form password', () => {
    beforeEach(() => {
      buildComponent();
      component.find('FormControl').at(0).simulate('change', {target: {value: 'pass', name: 'password'}})
    });
  
    it('should update password', () => {
      expect(component.state().password).toEqual('pass')
    })
  });

  describe('test click event for login submit button', () => {
    beforeEach(() => {
      buildComponent();
      component.find('Form').at(0).simulate('submit', {
          preventDefault: () => {}
      })
    });
  
    it('should call performLogin', () => {
      expect(component.instance().props.performLogin).toHaveBeenCalled()
    })
  });

  describe('snapshot testing', () => {
    it('should render correctly by comparing snapshot', () => {
      const tree = renderer.create(<Login/>).toJSON();
      expect(tree).toMatchSnapshot();
    })
  });

  describe('test redux functions', () => {
    it('should test mapStateToProps', () => {
      const initialState = {
        login: {
          signin: true,
          isLoginError: false
        }
      };
      expect(mapStateToProps(initialState)).toEqual({
        signin: true,
        isLoginError: false
      })
    });
  
    it('should test mapStateToDispatch', () => {
      const dispatch = jest.fn();
      mapDispatchToProps(dispatch).performLogin();
      expect(dispatch).toHaveBeenCalled();
    })
  })