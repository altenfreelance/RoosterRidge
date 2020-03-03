import React from 'react';
import Member from './Member';

import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';

const member = {
    name:"Andrew Alten",
    instrument:"Mandolin",
    img_url:"images/members/Andrew.jpg"
}

afterEach(cleanup);

it('renders (matches snapshot) ', () => {
    const {asFragment} = render(
        <Member
            name={member.name}
            instrument={member.instrument}
            img_url={member.img_url} />
    );

    expect(asFragment()).toMatchSnapshot();
});
