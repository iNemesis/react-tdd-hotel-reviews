import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import SubHeader from "./SubHeader";



describe('the <SubHeader /> component', function () {
    const renderer = new ShallowRenderer();

    it('should render', function () {
        renderer.render(<SubHeader />);
        const component = renderer.getRenderOutput();

        expect(component).toMatchSnapshot();
    });

    it('should render with a dynamic title', function () {
        renderer.render(<SubHeader title='Test Application Test' />);
        const component = renderer.getRenderOutput();

        expect(component).toMatchSnapshot();
    });

    it('should render with a goback button', function () {
        renderer.render(<SubHeader goBack={() => {}} />);
        const component = renderer.getRenderOutput();

        expect(component).toMatchSnapshot();
    });

    it('should render with a form button', function () {
        renderer.render(<SubHeader openForm={() => {}} />);
        const component = renderer.getRenderOutput();

        expect(component).toMatchSnapshot();
    });
});