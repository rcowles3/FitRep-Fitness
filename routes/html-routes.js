var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var db = require("../models");

module.exports = function(app) {
    // Create all our routes and set up logic within those routes where required.
    app.get("/", function(req, res) {

      res.render("build", { 
      	workoutType: [
      		{workout:['a','c','d']},
      		{workout:['a','c','d']} 
      		 
      		  ] 
      		});
    });
}