import React from 'react';
import Events from './Events';

import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';

afterEach(cleanup);

it('renders (matches snapshot) ', () => {
    const {asFragment} = render(<Events />);
    expect(asFragment()).toMatchSnapshot();
});
