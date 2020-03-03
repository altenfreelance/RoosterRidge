import React from 'react';
import Members from './Members';

import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';

afterEach(cleanup);

it('renders (matches snapshot) ', () => {
    const {asFragment} = render(<Members />);
    expect(asFragment()).toMatchSnapshot();
});
