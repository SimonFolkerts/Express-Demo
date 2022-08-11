const express = require("express");

const app = express();

// to enable access to POST and PUT request body content (POST and PUT are used to submit data to the server so they have a payload) we need to enable the ability to parse different types of data, such as arrays or JSON data. We use the following express methods as middleware:

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// .use() is a generic matcher that matches with any type of request. All incoming requests will pass through this matcher and have the supplied function applied to them before passing on to their matching endpoint below. This sort of route is called middleware.

// GET requests to localhost:3000/blog-posts
app.get("/blog-posts", (req, res) => {
  // console.log the request method (this shows what type of request it is) and also the request url (this shows the address the request was made too)
  console.log(req.method + " to " + req.url);
  res.send("list of posts");
});

// GET requests to localhost:3000/blog-posts/favourites
app.get("/blog-posts/favourites", (req, res) => {
  console.log(req.method + " to " + req.url);
  res.send("list of favourite posts");
});

// GET requests to localhost:3000/blog-posts/<anything>
// <anything> will be saved as req.params.id
// note that since /blog-posts/favourites has the same pattern, it would match this endpoint too, so we need to put it above this one to ensure it isn't masked by this more generic endpoint since reqeusts are matched top to bottom
app.get("/blog-posts/:id", (req, res) => {
  // this endpoint has a dynamic segment. Anything after blog-posts/ will be saved in req.params.id, so we can then use it as a value in the function
  console.log(req.method + " to " + req.url + " with id of " + req.params.id);
  res.send("post id " + req.params.id);
});

// log the POST request payload and then send it back to the client
// note, if you try to concatenate an object with a string it will read [object Object], so we will not do that here and just send the json object back by itself.
app.post("/blog-posts", (req, res) => {
  console.log(req.method + " to " + req.url);
  // because we used the middleware at the top of the document, we can now access the contents of PUT and POST requests in req.body
  console.log(req.body);
  // because the data we are sending back to the client is JSON data from the post request, we should use a different response method rather than .send() and instead use .json() as this will ensure it is understood correctlyby the client.
  res.json(req.body);
});

// etc
app.put("/blog-posts/:id", (req, res) => {
  console.log(req.method + " to " + req.url + " with id of " + req.params.id);
  res.send("update post id " + req.params.id);
});

app.delete("/blog-posts/:id", (req, res) => {
  console.log(req.method + " to " + req.url + " with id of " + req.params.id);
  res.send("delete post id " + req.params.id);
});

app.listen(3000);
