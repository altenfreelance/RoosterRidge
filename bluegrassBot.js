const core = require('@actions/core');
const md = require('md-yaml-json');
const ics = require('ics')
const { writeFileSync } = require('fs')


// const github = require('@actions/github');
// const path = require("path");
const { resolve } = require('path');



try {
    // `file-name` input defined in action metadata file
    // const fileName = 'repos/RoosterRidge/events/cappys.md'
    const fileName = core.getInput('file-name');

    console.log(fileName)

    // Output full event details
    const { title, address, gigDateTime, caption } = md.processFile(resolve(__dirname, `../../${fileName}`)).meta;
    console.log("title: ", title)
    console.log("address: ", address)
    const dateTime = new Date(gigDateTime)

    const easternDate = dateTime.toLocaleString("en-US", {
        timeZone: "America/New_York",
        weekday: 'long', // "Saturday"
        month: 'long', // "June"
        day: '2-digit', // "01"       
    });

    const easternTime = dateTime.toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit', timeZone: 'America/New_York', })

    // Output example social media post
    const socialPosts = [
        `Howdy Folks, come on down to ${title} on ${easternDate} at ${easternTime} for some great music and fun! See you there!`,
        `They're back! Make the trip to ${title} on ${easternDate} at ${easternTime} for another show with Rooster Ridge! We cannot wait to see you there!`
    ]
    var randomPost = socialPosts[Math.floor(Math.random() * socialPosts.length)];
    console.log(randomPost)

    const event = {
        start: [
            dateTime.getFullYear(),
            dateTime.getMonth() + 1,
            dateTime.getDate(),
            dateTime.getHours(),
            dateTime.getMinutes()
        ],
        duration: { hours: 3, minutes: 0 },
        title,
        description: caption,
        location: address,
        url: 'https://www.roosterridgeofficial.com/shows',
        // geo: { lat: 40.0095, lon: 105.2669 },
        // categories: ['10k races', 'Memorial Day Weekend', 'Boulder CO'],
        status: 'CONFIRMED',
        busyStatus: 'BUSY',
        organizer: { name: 'Bluegrass Bot', email: 'bluegrass-bot@roosterridgeofficial.com' },
        attendees: [
            { name: 'Rooster Ridge', email: 'roosterridgeofficial@gmail.com', rsvp: true, partstat: 'ACCEPTED', role: 'REQ-PARTICIPANT' },
        ]
    }

    ics.createEvent(event, (error, value) => {
        if (error) {
            console.log(error)
            return
        }

        const calPath = `${__dirname}/event.ics`
        console.log(value, calPath)
        writeFileSync(calPath, value)

        core.setOutput("gig_title", title)
        core.setOutput("social_suggestion", randomPost)
    })



} catch (error) {
    core.setFailed(error.message);
}

