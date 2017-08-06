// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// =============================================================
// Dependencies
// =============================================================
var express = require("express");
var db = require("./models");
var mysql = require('mysql');
var expbhs = require ('express-handlebars');


// =============================================================
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;



// =============================================================
// Starts the server to begin listening
// =============================================================
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("Listening on Port: ", PORT);
    });
});