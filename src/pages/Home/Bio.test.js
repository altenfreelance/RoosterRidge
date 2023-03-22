import React from 'react';
import Bio from './Bio';

import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';

afterEach(cleanup);

it('renders (matches snapshot) ', () => {
    const {asFragment} = render(<Bio />);
    expect(asFragment()).toMatchSnapshot();
});
