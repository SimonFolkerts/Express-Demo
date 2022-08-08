const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("GET request to root");
  res.send("Hello!");
});

// new endpoint that monitors for GET to /posts. Usually such a request would return a list of posts
app.get("/posts", (req, res) => {
  console.log("GET request to /posts");
  res.send("List of all Posts");
});

// new endpoint that monitors for POST to /posts. Usually such a request would be to upload a new post to the server
app.post("/posts", (req, res) => {
  console.log("POST request to /posts");
  res.send("Uploaded a New Post");
});

app.listen(3000);
