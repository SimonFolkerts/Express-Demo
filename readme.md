# Basic Express Back-End

## Step 1: Initial Setup

1. First we need a package.json file that will track our dependencies. We can use the CLI command `npm init -y` to nitialise a new package.json file with all defaults set automatically.

2. Now that we are tracking dependencies, we will need to install the Express package using `npm install express`

3. Finally, we can create a new JS file that will be our main server file. Here we have server.js, where the basic server setup has been added. Refer to server.js comments for more information

4. Server is started by running the server.js file using node in the CLI: `node server.js`

5. You can use Nodemon to prevent having to manually restart the server everytime you want to test a change to the files. Run `npm install --save-dev nodemon` to save nodemon as a dev dependency (a package that is used for development but is not part of the finished product). To run nodemon use either `npx nodemon server.js` or create a script in package.json that executes `nodemon server.js` as shown in this project.

6. You should see `Cannot GET /` as the response when you visit the server's address at `localhost:3000`. This means it is working and we can start setting up endpoints.

