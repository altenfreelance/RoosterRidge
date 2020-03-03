import React from 'react';
import Event from './Event';

import {render, cleanup} from "@testing-library/react";
import '@testing-library/jest-dom'

const event = {
    name: "Rooster Ridge in the Park",
    date: "06/18/2020",
    time: "7:00pm",
    address: "6915 Beechmont Ave. and 6910 Salem Road.",
    caption: "Join Rooster Ridge at Beech Acres Park for great music and fun!",
    img_url: "images/cappys/cappys1.jpg"
}

afterEach(cleanup);

it('renders (matches snapshot) ', () => {
    const {asFragment} = render(
        <Event
        name={event.name}
        date={event.date}
        time={event.time}
        address={event.address}
        caption={event.caption}
        img_url={event.img_url} />
    );
    expect(asFragment()).toMatchSnapshot();
});
