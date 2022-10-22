const core = require('@actions/core');
// const github = require('@actions/github');
// const path = require("path");


try {
    // `file-name` input defined in action metadata file
    const fileName = core.getInput('file-name');

    console.log(fileName)

    // TODO Output full event details
    // TODO Output example social media post

    // TODO Email event details as calendar invite (or some sort of link that will create the calendar invite)
    // TODO Email post details (or create link that autofills a post)

} catch (error) {
    core.setFailed(error.message);
}

