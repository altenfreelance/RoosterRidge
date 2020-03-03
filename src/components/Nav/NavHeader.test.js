import React from 'react';
import NavHeader from './NavHeader';

import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import {BrowserRouter as Router} from "react-router-dom";

afterEach(cleanup);

it('renders (matches snapshot) ', () => {
    const {asFragment} = render(<Router><NavHeader /></Router>);
    expect(asFragment()).toMatchSnapshot();
});
