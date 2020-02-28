import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavHeader from './NavHeader';
import {
    BrowserRouter as Router
} from "react-router-dom";

it('renders without crashing', () => {
const div = document.createElement('div');

ReactDOM.render(<Router><NavHeader /></Router>, div);

ReactDOM.unmountComponentAtNode(div);
});
