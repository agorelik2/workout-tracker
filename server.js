// Dependencies and variables
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

// Setting up Express App
const PORT = process.env.PORT || 4000;

//Setting up database
const db = require("./models");

const app = express();

//app.use(morgan("tiny"));
app.use(morgan("dev")); //log to console on development

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false, //not sure
});

// Creating routes
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Start the server to begin listening
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });