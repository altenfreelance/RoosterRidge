import React from 'react';
import Music from './Music';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

afterEach(cleanup);

it('renders (matches snapshot) ', () => {
    const { asFragment } = render(<Music />);
    expect(asFragment()).toMatchSnapshot();
});
