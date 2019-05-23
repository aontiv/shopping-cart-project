import React from 'react';
import App from '../js/components/App';
import TestRenderer from 'react-test-renderer';

test('App should render "APP"', () => {
    const testInstance = TestRenderer.create(<App />).root;
    const routes = testInstance.findAllByType('Route');
    console.log(routes)
    
});
