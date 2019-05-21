import React from 'react';
import App from '../js/components/App';
import TestRenderer from 'react-test-renderer';

test('App should render "APP"', () => {
    const testRenderer = TestRenderer.create(<App />);
    const testInstance = testRenderer.root;

    expect(testInstance.find(el => el.type === 'div' && el.props.className === 'app').children[0]).toEqual('APP');
});
