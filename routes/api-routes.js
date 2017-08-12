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
    // app.get("/username", function(req, res) {
    //     db.user.findOne({
    //         where: {
    //             id: req.params.id
    //         }.then(function(userData) {
    //             var hbsObj = { user: userData };
    //             res.render("user", hbsObj);
    //         })
    //     });
    // });
    app.get("/", function(req, res) {
        db.user.findAll({}).then(function(data) {

            res.render("index", { user: data });

        });
    });


    app.get("/exercises", function(req, res) {
        db.workoutData.findAll({}).then(function(data) {
            res.render("exercises", { workoutData: data });
        });
    });

    app.get("/build", function(req, res) {
        db.exercises.findAll({
            attributes: ['workout_type'],
            group: ['workout_type']
        }).then(function(data) {
            var hbsObject = { exercises: data };
            res.render("build", hbsObject);
            //console.log(hbsObject);
        });
    });
    app.get("/:workout_type", function(req, res) {
        console.log(req.params.workout_type);
        db.exercises.findAll({
            where: {
                workout_type: req.params.workout_type
            }
        }).then(function(data) {
            var hbsObject = { exercises: data };
            // console.log('======== DATA=======', data);
            res.render("build", hbsObject);
        });
    });
    app.post("/:exercise", function(req, res) {
        console.log(req.params.exercise);
        var newWorkout = {
            exercise: req.params.exercise

        }
        console.log(newWorkout);
        db.workoutData.create(newWorkout).then(function() {
            res.redirect("/build");
            // app.get("/build", function(res, req) {
            //     db.workoutData.findAll({}).then(function(data) {
            //         res.render("build", { workoutData: data });
            //     });
            // });
        });
        // db.workoutData.create(newWorkout).then(function(data) {
        //     res.redirect("workouts");
        // });

    });



};