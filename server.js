// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
<<<<<<< HEAD
var db = require("./models");
var mysql = require("mysql");
var expbhs = require("express-handlebars");
var path = require("path");
=======
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

//var connection = require("./config/connection");
>>>>>>> master

// Sets up the Express App
// =============================================================
var app = express();

var PORT = process.env.PORT || 3000;

<<<<<<< HEAD
app.use("public", path.static(__dirname, "/public"));


=======

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("public"));

app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");

// Requiring our models for syncing
var db = require("./models");

// Routes
>>>>>>> master
// =============================================================
require("./routes/post-api-routes.js")(app);



/// Syncing our sequelize models and then starting our Express app
// =============================================================
<<<<<<< HEAD
db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log("Listening on Port: ", PORT);
    });
});
=======
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
>>>>>>> master
