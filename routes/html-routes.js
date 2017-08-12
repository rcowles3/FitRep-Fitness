var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var db = require("../models");

module.exports = function(app) {
    // Create all our routes and set up logic within those routes where required.
<<<<<<< HEAD
    router.get("/", function(req, res) {
        db.user.findAll({}).then(function(data) {
            res.render("index", { user: data });

        });
    });
=======
    router.get("/create-account", function(req, res) {
        // db.users.findAll({}).then(function(data) {
        res.render("create-account");

        // });
    });

    // router.get("/exercises", function(req, res))
>>>>>>> RyanDev
}