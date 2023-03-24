const core = require('@actions/core');
const md = require('md-yaml-json');
const ics = require('ics')
const { writeFileSync } = require('fs')

const fetch = require('node-fetch');

// Set the API endpoint URL and your API key

// CHAT GPT
const apiUrl = 'https://api.openai.com/v1/chat/completions';
const NUMBER_OF_SUGGESTIONS = 3;

require('dotenv').config()
const apiKey = process.env.CHAT_GPT_API_KEY;
const maxTokens = 100;

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

    const easternTime = dateTime.toLocaleTimeString('en-US', { hour12: true, hour: 'numeric', minute: '2-digit', timeZone: 'America/New_York', })

    let socialMediaSuggestions = ""
    // Event Title 
    socialMediaSuggestions += `${title} \n`

    const event_description_prompt = `Create a concise event  description for the bluegrass band Rooster Ridge playing at ${title} on ${easternDate} at ${easternTime}. Don't use the word unforgettable or ticket and do not use any hashtags.`
    const event_reminder_prompt = `Create a concise social media reminder post for the bluegrass band Rooster Ridge playing at ${title} on ${easternDate} at ${easternTime}. Don't use the word unforgettable or ticket and do not use any hashtags.`

    fetch(apiUrl, getRequestInit(event_description_prompt))
        .then(res => res.json())
        .then(data => {
            const event_descriptions = data.choices.map((choice) => choice.message.content)
            fetch(apiUrl, getRequestInit(event_reminder_prompt))
                .then(res => res.json())
                .then(data => {
                    const event_reminders = data.choices.map((choice) => choice.message.content)

                    console.log("event_reminders: ", event_reminders)
                    console.log("event_descriptions: ", event_descriptions)
                    socialMediaSuggestions += `Suggested Event Descriptions: \n ${event_descriptions.join("\n")}`
                    socialMediaSuggestions += `\n\nSuggested Reminder Posts: \n ${event_reminders.join("\n")}`

                    socialMediaSuggestions += `\n\n\n\n NOTE: GHAT GPT Prompts used to generate suggestions\n`
                    socialMediaSuggestions += `Event Description Prompt: ${event_description_prompt}`
                    socialMediaSuggestions += `Reminder Post Prompt: ${event_reminder_prompt}`

                    core.setOutput("social_suggestion", socialMediaSuggestions)
                })
                .catch(err => console.error(err));
        })
        .catch(err => console.error(err));


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
    })

    core.setOutput("gig_title", title)


} catch (error) {
    core.setFailed(error.message);
}


function getRequestInit(prompt) {
    return {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
            "OpenAI-Organization": "org-lccZwtTCLE1PchHazO6BlYrI"
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [{ "role": "user", "content": prompt }],
            "temperature": 0.7,
            "n": NUMBER_OF_SUGGESTIONS,
            "max_tokens": maxTokens
        }
        )
    }
}