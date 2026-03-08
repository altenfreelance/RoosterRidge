import { createRequire } from 'module';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const require = createRequire(import.meta.url);
const { default: parser } = require('md-yaml-json');

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const directoryPath = path.join(__dirname, 'events');
const parsedDir = parser(path.resolve(__dirname, directoryPath));
const jsonContent = JSON.stringify(parsedDir, null, 2);

fs.writeFile("src/pages/Events/parsed-events.json", jsonContent, 'utf8', function (err) {
    if (err) {
        console.log("An error occurred while writing JSON Object to File.");
        return console.log(err);
    }
    console.log("Events JSON file saved.");
});
