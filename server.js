// Dependencies
// =============================================================

let express = require('express');
let path = require("path");

app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
PORT = process.env.PORT || 8081;

// Parse request body as JSON
app.use(express.urlencoded({ extended: true })),
app.use(express.json()),

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });






