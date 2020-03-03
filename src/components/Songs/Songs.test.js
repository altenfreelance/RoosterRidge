import React from 'react';
import Songs from './Songs';

import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';

afterEach(cleanup);

it('renders (matches snapshot) ', () => {
    const {asFragment} = render(<Songs />);
    expect(asFragment()).toMatchSnapshot();
});
