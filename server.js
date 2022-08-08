const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("GET request to root");
  res.send("Hello!");
});

// endpoint that monitors /html for GET requests
app.get("/html", (req, res) => {
  console.log("GET request to /html");
  // use .render() instead and pass it the name of a file in the views folder to render and it will use ejs to turn it into an html file to send to the client.
  res.render("page");
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
