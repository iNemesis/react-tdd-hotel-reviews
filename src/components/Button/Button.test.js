import React from 'react';
import {shallow} from 'enzyme';
import Button from './Button';

describe('the <Button />', function () {
    it('should render the correct children', function () {
        const children = 'This is a button';
        const component = shallow(<Button>{children}</Button>);

        expect(component.props().children).toEqual(children);
    });

    it('should handle the onClick event', function () {
        const mockOnClick = jest.fn();
        const component = shallow(<Button onClick={mockOnClick} />);

        component.simulate('click');

        expect(mockOnClick).toHaveBeenCalled();
    });
});