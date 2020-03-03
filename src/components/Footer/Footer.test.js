import React from 'react';
import Footer from './Footer';

import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';

afterEach(cleanup);

it('renders (matches snapshot) ', () => {
    const {asFragment} = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
});
