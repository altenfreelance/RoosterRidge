import React from 'react';
import Address from './Address';

import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';

afterEach(cleanup);

it('renders (matches snapshot) ', () => {
    const {asFragment} = render(<Address address="309 W Loveland Ave, Loveland, OH 45140"/>);
    expect(asFragment()).toMatchSnapshot();
});
