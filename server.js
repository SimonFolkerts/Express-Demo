// to access the express framework we need to import it from node_modules using require. This makes it available in the current file. It takes the form of a function, which we store in the 'express' variable.
const express = require("express");

// now that it is imported, we can use the express function to instantiate a new express application object, which we store in the app variable.
const app = express();

// now that we have the express instance set up, we can instruct it to begin listening to http traffic on port 3000
app.listen(3000);

// to activate the server, we can tell node to execute this js file by running this CLI command: node server.js
