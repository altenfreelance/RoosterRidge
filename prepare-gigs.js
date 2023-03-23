const parser = require('md-yaml-json').default;

var path = require('path');
var directoryPath = path.join(__dirname, 'events');
const parsedDir = parser(path.resolve(__dirname, directoryPath));
var jsonContent = JSON.stringify(parsedDir, null, 2);
const fs = require('fs');


fs.writeFile("src/pages/Events/parsed-events.json", jsonContent, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }

    console.log("JSON file has been saved.");
});