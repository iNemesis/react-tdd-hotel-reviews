import React from 'react';
import { mount } from 'enzyme';
import Hotels, { Alert, HotelItemsWrapper } from './Hotels';
import { BrowserRouter as Router } from 'react-router-dom';
import HotelItem, {Title} from "./HotelItem";

let useContextMock;

beforeEach(() => {
    useContextMock = React.useContext = jest.fn();
})

afterEach(() => {
    useContextMock.mockReset();
})

describe('the <Hotels /> component', function () {
    it('should handle the first mount', function () {
        // Given
        const mockContext = {
            loading: true,
            error: '',
            hotels: [],
            getHotelsRequest: jest.fn(),
        }
        useContextMock.mockReturnValue(mockContext);

        // When
        const wrapper = mount(<Hotels />);

        // Then
        expect(mockContext.getHotelsRequest).toHaveBeenCalled();
        expect(wrapper.find(Alert).text()).toBe('Loading...');
    });

    it('should render the list of hotels', function () {
        const mockContext = {
            loading: false,
            error: '',
            hotels: [{
                id: 123,
                title: 'Test hotel',
                thumbnail: 'test.jpg',
            }],
            getHotelsRequest: jest.fn()
        }
        useContextMock.mockReturnValue(mockContext);
        const wrapper = mount(<Router><Hotels /></Router>);

        expect(wrapper.find(HotelItemsWrapper).exists()).toBe(true);

        expect(wrapper.find(HotelItem).exists()).toBe(true);
        expect(wrapper.find(HotelItem).at(0).find(Title).text()).toBe(mockContext.hotels[0].title);
    });
});