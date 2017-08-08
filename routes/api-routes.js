// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
    app.get("/username", function(req, res) {
        db.user.findOne({
            where: {
                id: req.params.id
            }.then(function(userData) {
                var hbsObj = { user: userData };
                // console.log(allBurgers);
                res.render("index", hbsObj);
            })
        });
    });
    app.get("/workouts", function(req, res) {
        db.workoutData.findAll({}).then(function(data) {
        	var hbsObject = {workoutData: data};
            res.render("index", hbsObject);
            //console.log(hbsObject);

        });
    });
};