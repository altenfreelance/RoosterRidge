import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import VidContainer from './VidContainer';

it('renders without crashing', () => {
const div = document.createElement('div');

ReactDOM.render(<VidContainer />, div);

ReactDOM.unmountComponentAtNode(div);
});
