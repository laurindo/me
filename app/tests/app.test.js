import React from 'react';
import App from '../components/app.component';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

test('Testing App Main', () => {
    const component = renderer.create(
        <App />
    );
    let app = component.toJSON();
    expect(app.children[0]).toEqual('App Main');
});