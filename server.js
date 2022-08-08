const express = require("express");

const app = express();

// add ability to react to get requests to localhost:3000/
app.get("/", (req, res) => {
  // this callback function gets access to the request and response objects. The request object contains information about the request from the clinet, and the response object can be used to create and send a response to the client using a variety of different methods.

  // first we console log a simple message to the servers console in Node
  console.log("get request to root");

  // then we use the .send() method to send to the client a string that says hello. Responding to the client ends the interaction.
  res.send("Hello!");
});

app.listen(3000);
