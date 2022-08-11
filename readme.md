# Basic Express Back-End

## Step 1: Initial Setup

1. First we need a package.json file that will track our dependencies. We can use the CLI command `npm init -y` to nitialise a new package.json file with all defaults set automatically.

2. Now that we are tracking dependencies, we will need to install the Express package using `npm install express`

3. Finally, we can create a new JS file that will be our main server file. Here we have server.js, where the basic server setup has been added. Refer to server.js comments for more information

4. Server is started by running the server.js file using node in the CLI: `node server.js`

5. You can use Nodemon to prevent having to manually restart the server everytime you want to test a change to the files. Run `npm install --save-dev nodemon` to save nodemon as a dev dependency (a package that is used for development but is not part of the finished product). To run nodemon use either `npx nodemon server.js` or create a script in package.json that executes `nodemon server.js` as shown in this project.

6. You should see `Cannot GET /` as the response when you visit the server's address at `localhost:3000`. This means it is working and we can start setting up endpoints.

## Step 2: Create an Endpont

Once the server is running, requests can be sent to it which it must be programmed to react to in a certain way. We can use a variety of methods to react to a variety of request types, such as `.get()`, `.post()`, `.put()`, `.delete()` etc.

These methods require two parameters to work properly, the path or route that they should monitor, and a function that will handle the request and response objects for the interaction.

1. Create an endpoint to handle get requests to the root of the application using `app.get('/')`

2. Supply it with a second argument, a function that will be given the request and response objects: `app.get('/', (req, res) => {})`

3. In the callback function, we now have access to the request and the response objects. We specify what should happen when a get request arrives at the root of the application. In the example the server will console log a message and then trigger the response object to send back a string to the client, ending the interaction using `res.send()`

4. Now try visiting the address `localhost:3000` in the browser, you should see 'Hello!' rendered in the viewport. In the Network tab you can see the http transactions request and response data to confirm this has worked.

## Step 3: Add More Endpoints

We can add additional endpoints with different methods and at different URL addresses.

1. Create a new endpoint that reacts to get requests to /posts as shown in the example. Get requests are usually used to retreive data from a server to be displayed on the client.

2. Create a new endpoint that reacts to post requests as shown in the example. Post requests are usually used to send data to the server to be saved from the client. This time we use the `.post()` method instead of `.get()`

Note, to send a GET request to an address we can just point the browser to an address, as it uses GET requests to fetch and display content. However, to send a POST request to an address you would need to use an HTML form or fetch() or a REST Client.

## STEP 4: Sending Back Stuff

Rather than just sending back strings, we can also send back files, JSON data, basically whatever we want. Lets try sending back an HTML or text file.

1. Create a new file called page.html or something similar, and put in some boilerplate HTML

2. Create a new endpoint that monitors for get requests to /html as shown in the example. Instead of usind `.send()` to send back a string, we will use `.sendFile()`

3. `.sendFile()` requires a single argument, the absolute path to the file to send. This is based on the root of the system that the server is running on, so we will need to get the FULL path to the file from the disk. Fortunately we can use `--dirname` to get the path to the current folder the server is in, and then just concatenate the file relative to that folder onto the end, as shown in the example.
e.g. `__dirname + 'path/to-file.html'`

4. If you send a get request to the server at localhost:3000/html you should get back the HTML file as a response.

## Step 5: Templating for Server Side Rendering

We can dynamically modify HTML files before sending them to the client using a templating engine or view engine. Here we will install and use EJS to try this out.

1. Run `npm install ejs` to install ejs.

2. We need to tell Express that we are using ejs by adding `app.set('view engine', 'ejs')` to the server.

3. ejs will look for a views folder. Create a views folder in the project.

4. Move the HTML file we created previously into this new views folder.

5. Change the extension on the HTML file from `.html` to `.ejs` so that ejs knows it is a template file.

6. In the `.ejs` file (formerly an `.html` file) add some templating syntax as shown in the example. `<%= "This is dynamically generated!" + " " + "Math: " + (4 + 4) %>`. This is just JS that is between the EJS tags, similar to using the double curly brackets in Vue to template on the front end.

7. Now we can change our /html endpoint to use `.render()` instead of `.sendFile()`. We can also just write the name of the file without needing to specify a path as ejs will simply look in the views folder automatically.

8. Now when the server is started and a get request is sent to /html, the server will use ejs to dynamically process and assemble the .ejs template file into a static HTML file and send that to the client. This is called serverside rendering.

## Step 6: Adding a Full Set of Endpoints/Routes
Let's add a full set of CRUD endpoints for a blogging system. We will need the ability to add, remove, update and read blog-post, as well as authors. For now there will be no accounts or authentication so all CRUD functions will be available to anyone. For now we will just send back messages that reflect what that endpoint will do, and later we will add functionality.

1. Create a set of enpoints for the following use cases:
    - get list of all blog posts: `get("/blog-posts")`
    - get list of favourite blog posts: `get("/blog-posts/favourites")`

2. How can we create an endpoint for a specific post from the list? We need some way of specifying which post we want. We could theoretically make an endpoint for every post in the list but this is unfeasible. Instead we need a single endpoint that can somehow see which one we want based on some criteria such as title or id of the post. We can use dynamic URL segments for this.
    - get specific post: `get("/blog-posts/:id")`
    - update specific post: `put("/blog-posts/:id")`
    - delete specific post: `delete("/blog-posts/:id")`

The colon : indicates that that part of the URL is not part of the address on the server, but a piece of data that should be accessible in the code. If we put a colon in front of a segment, that segment is then accessible in the req.params property. Anything in the req URL that occupies the same position as the : is then stored as a value in req.params.

So in the above example, if a GET request came to the server with a URL of `localhost:3000/blog-posts`, it would match with the get all posts endpoint. However if there was a second segment in the URL like this: `localhost:3000/blog-posts/qwerty` then that second segment (`qwerty`) would be stored as a value in req.params.id, since it is the part of the URL that corresponds with the :id segment. So any URL that has a second segment after /blog-posts would match with this endpoint and have a dynamic bit of data in it.

One important note, for POST requests to be able to access the data being sent in the body, we must first enable access to the body using `express.urlencoded({extended: true})` and `epxress.json()`. Urlencoded() allows express to parse strings and arrays and objects etc, and json() allows express to parse JSON data.

Refer to the code for an example of this.