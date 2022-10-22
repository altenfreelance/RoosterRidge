const core = require('@actions/core');
const md = require('md-yaml-json');

// const github = require('@actions/github');
// const path = require("path");
const { resolve } = require('path');



try {
    // `file-name` input defined in action metadata file
    const fileName = core.getInput('file-name');

    console.log(fileName)

    // Output full event details
    const { title, address, gigDateTime } = md.processFile(resolve(__dirname, fileName)).meta;
    console.log("title: ", title)
    console.log("address: ", address)
    const dateTime = new Date(gigDateTime)
    const date = `${dateTime.getMonth() + 1}/${dateTime.getDate()}/${dateTime.getFullYear()}`
    const time = dateTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
    const zone = dateTime.toLocaleTimeString('en-us', { timeZoneName: 'short' }).split(' ')[2]
    console.log("gig date: ", `${date}: ${time} ${zone}\n`)

    // Output example social media post
    const socialPosts = [
        `Howdy Folks, come on down to ${title} on ${date} at ${time} ${zone} for some great music and fun! See you there!`,
        `They're back! Make the trip to ${title} on ${date} at ${time} ${zone} for another show with Rooster Ridge! We cannot wait to see you there!`
    ]
    var randomPost = socialPosts[Math.floor(Math.random() * socialPosts.length)];
    console.log(randomPost)

    // TODO Email event details as calendar invite (or some sort of link that will create the calendar invite)
    // TODO Email post details (or create link that autofills a post)

} catch (error) {
    core.setFailed(error.message);
}

