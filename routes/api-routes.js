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

    app.post("/create-account", function(req, res) {
        console.log('======================= REQUEST ================\n\n', req.body);
        db.user.create(req.body).then(function(data) {
            res.redirect("/workouts");
        })
    })

    app.get("/create-account", function(req, res) {
        res.render("create-account");
    });

    app.get("/workouts", function(req, res) {
        db.exercises.findAll({
            attributes: ['workout_type'],
            group: ['workout_type']
        }).then(function(data) {
            var hbsObject = { exercises: data };
            res.render("workouts", hbsObject);
            //console.log(hbsObject);
        });
    });
    app.get("/:workout_type", function(req, res) {
        // console.log(req.params.workout_type);
        db.exercises.findAll({
            where: {
                workout_type: req.params.workout_type
            }
        }).then(function(data) {
            var hbsObject = { exercises: data };
            // console.log('======== DATA=======', data);
            res.render("exercises", hbsObject);
        })
    })
};