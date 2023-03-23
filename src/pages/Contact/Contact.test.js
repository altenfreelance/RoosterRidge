import React from 'react';
import Contact from './Contact';

import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';

afterEach(cleanup);

it('renders (matches snapshot) ', () => {
    const {asFragment} = render(<Contact />);
    expect(asFragment()).toMatchSnapshot();
});
