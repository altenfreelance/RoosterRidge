const core = require('@actions/core');

const parser = require('md-yaml-json').default;

var path = require('path');
var directoryPath = path.join(__dirname, '../../events');
// var directoryPath = path.join(__dirname, 'events'); // Testing

const parsedDir = parser(path.resolve(__dirname, directoryPath));

const date = new Date();
// const date = new Date(2022, 10, 2) // Testing
const nextMonth = (new Date(date.getFullYear(), date.getMonth() + 1, date.getDate())).toLocaleString('default', { month: 'long' });

try {
    const upcoming_events = getUpcomingEvents(parsedDir);
    console.log(upcoming_events)
    const updateMsg = getUpdateMessage(upcoming_events)
    console.log(updateMsg)
    core.setOutput("update_message", updateMsg)
} catch (error) {
    core.setFailed(error.message);
}



function getUpcomingEvents(events) {
    // Get All Events from next month
    const firstDayOfNextMonth = getFirstDayOfNextMonth();
    const lastDayOfNextMonth = getFirstDayOfNextNextMonth();

    const filteredEvents = events.filter((event) => {
        let eventDate = new Date(event.meta.gigDateTime);
        return eventDate >= firstDayOfNextMonth && eventDate <= lastDayOfNextMonth;
    });


    let readableEvents = []
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    filteredEvents.forEach(event => {
        const dateTime = new Date(event.meta.gigDateTime)

        const date = `${dateTime.getMonth() + 1}/${dateTime.getDate()}/${dateTime.getFullYear()}`
        const time = dateTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

        const dayOfWeek = weekday[dateTime.getDay()];
        const zone = dateTime.toLocaleTimeString('en-us', { timeZoneName: 'short' }).split(' ')[2]
        readableEvents.push({
            date,
            time: time + " " + zone,
            title: event.meta.title,
            day: dayOfWeek
        })
    });


    return readableEvents;
}

function getUpdateMessage(readableEvents) {
    let msg = `Rooster Ridge ${nextMonth} update: `;
    readableEvents.forEach(event => {
        const { title, date, time, day } = event
        msg += `${title} on ${day} ${date} at ${time}. `
    });

    msg += "You can find address details on our website at roosterridgeofficial.com/shows"
    return msg
}

function getFirstDayOfNextMonth() {
    return new Date(date.getFullYear(), date.getMonth() + 1, 1);
}

function getFirstDayOfNextNextMonth() {
    return new Date(
        date.getFullYear(),
        date.getMonth() + 2, 1
    );
}

