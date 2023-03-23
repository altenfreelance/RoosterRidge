const path = require('path');
const fs = require('fs');

const MEDIA_KIT_DIR = 'public/images/media-kit'

const directoryPath = path.join(__dirname, MEDIA_KIT_DIR);
fs.readdir(directoryPath, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }

    const imagePaths = files.map((file) => `images/media-kit/${file}`)

    fs.writeFile("src/pages/MediaKit/parsed-media-kit.json", JSON.stringify(imagePaths), 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }

        console.log("JSON file has been saved.");
    });

});

