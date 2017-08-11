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

    app.get("/", function(req, res) {
        res.render("index");
    })

    app.get("/create-account", function(req, res) {
        res.render("create-account");
    });

    app.post("/create-account", function(req, res) {
        console.log('======================= REQUEST ================\n\n', req.body);
        db.user.create(req.body).then(function(data) {
            res.redirect("/workouts");
        })
    })

    app.get("/login", function(req, res) {
        res.render("login");
    });

    app.post("/login", function(req, res) {
        console.log('======================= REQUEST ================\n\n', req.body);
        db.user.findOne({
            where: {
                username: req.body.username,
                pass: req.body.pass
            }
        }).then(function(loginData) {
            res.redirect("/workouts");
            // console.log('================= LOGIN DATA ===============\n', loginData, '\n');
            console.log('================= LOGIN DATA ===============\n', loginData.first_name, '\n');
        })
    })

    app.get("/workouts", function(req, res) {
        db.exercises.findAll({
            // include: [db.user],
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

    app.post("/:workout_type", function(req, res) {
        // console.log(req.params.workout_type);
        db.workoutData.create(req.body).then(function(data) {
            // var hbsObject = { exercises: data };
            console.log('======== WORKOUT DATA==========\n\n', hbsObject);
            res.render("exercises", hbsObject);
        })
    })
};