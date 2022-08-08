const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("GET request to root");
  res.send("Hello!");
});

// endpoint that monitors /html for GET requests
app.get("/html", (req, res) => {
  console.log("GET request to /html");
  // use sendFile() to send a file. __dirname is prepended to the file name as the absolute path to the file is needed here and __dirname gets the path to the project folder, so we simply add what is needed to get us to the exact file in the project folder. In this case the file is right inside the project folder so we just write /filename
  res.sendFile(__dirname + "/page.html");
});

// posts
app.get("/posts", (req, res) => {
  console.log("GET request to /posts");
  res.send("List of all Posts");
});

app.post("/posts", (req, res) => {
  console.log("POST request to /posts");
  res.send("Uploaded a New Post");
});

app.listen(3000);
