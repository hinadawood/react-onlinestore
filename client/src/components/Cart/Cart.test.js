import React from 'react';
import { shallow } from "enzyme";
import { Cart } from './Cart';

let component;

const buildComponent = (props = {
    selectedItems: [
        {
            id: 1,
            name: 'A2 Full Cream Milk 1l',
            price: '2.50',
            qnty: 2,
            stockAvailable: true,
            image: 'A2FullCreamMilk.jpg'
          },
          {
            id: 2,
            name: 'Dairy Farmer Full Cream Milk 1l',
            price: '3.00',
            qnty: 1,
            stockAvailable: true,
            image: 'DairyFarmersFullCreamMilk.jpg'
          }
    ],
    cartIsDisplayed: true,
    total: 8,
    displayCart: jest.fn()
  }) => {
    component = shallow(<Cart {...props} />);
    return component;
  };

describe('test suite for Cart render ', () => {
    beforeEach(() => {
        buildComponent();
    })

    it('should test Cart component is defined', () => {
        expect(component).toBeDefined();
    });

    it('should test number of CartItem elements equals to items in cart', () => {
        expect(component.find('CartItem').length).toEqual(component.instance().props.selectedItems.length);
    });

    it('should test Cart has close-icon class for slider', () => {
        expect(component.find('i').at(0).hasClass('c-onlineshop-cart__close-icon')).toBe(true);
    })
})

describe('test click event for showing cart slider', () => {
    beforeEach(() => {
        buildComponent();
        component.find('.c-onlineshop-cart__close-icon').at(0).simulate('click');
    })

    it('should call displayCart', () => {
        expect(component.instance().props.displayCart).toHaveBeenCalled();
    })

})
