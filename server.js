// server.js file should require the basic npm packages we've used in class: express and path.

const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 8080;
const app = express();





app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });


