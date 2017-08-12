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

    app.post("/create-account", function(req, res, next) {

        // res.redirect("/login");
        // console.log('======================= REQUEST ================\n\n', req.body);
        db.user.create(req.body).then(function(newUser) {
            // console.log(newUser.first_name, newUser.last_name);
            // res.render("workouts", newUser);

            res.redirect("login");
            // app.get("/:id", function(req, res) {
            //     db.user.findOne({
            //         where: {
            //             id: req.params.id
            //         }
            //     }).then(function(data) {
            //         console.log('=================== DATA =============', data);
            //         // var hbsObject = { user: data };
            //         // res.render("workouts", hbsObject);
            //         // res.redirect("/login");

            //     });
            // });
        });
    });

    app.get("/login", function(req, res) {
        res.render("login");
    });

    app.post("/login", function(req, res) {
        // console.log('======================= REQUEST ================\n\n', req.body);
        db.user.find({
            where: {
                username: req.body.username,
                pass: req.body.pass
            }
        }).then(function(loginData) {
            // console.log('================= LOGIN DATA ===============\n', loginData, '\n');
            if (!loginData) {
                // alert("User does not Exist, please create an account.");
                res.redirect('/create-account');
            } else {
                var hbsObject = { user: loginData };
                console.log('===================DATA +================\n\n\n', hbsObject);
                res.render("workouts", hbsObject);
            }
        });
    });

    // app.get("/login/:username", function(req, res) {
    //     db.user.findOne({
    //         where: {
    //             username: req.params.username
    //         }
    //     }).then(function(loginData) {
    //         res.render("workouts", { user: first_name });
    //     });
    // });

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
        console.log(req.params.workout_type);
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
        //console.log('======== DATA=======', data);
        // res.render("build", hbsObject);
        // });
        // });
        // app.post("/:exercise", function(req, res) {
        //     // console.log(req.params.exercise);
        //     var newWorkout = {
        //             exercise: req.params.exercise

    //         }
    //console.log(newWorkout);
    // db.workoutData.create(newWorkout).then(function(data) {
    // console.log(data);
    // res.end();
    //res.render("workouts", { workoutData: data });

    // app.get("/build", function(res, req) {
    //     db.workoutData.findAll({}).then(function(data) {
    //         res.render("build", { workoutData: data });
    //     });
    // });
    // });
    // db.workoutData.create(newWorkout).then(function(data) {
    //     res.redirect("workouts");
    // });

    // });
    // app.get("/:exercise", function(req, res) {
    //     // console.log(req.params.workout_type);
    //     db.workoutData.findOne({
    //         where: {
    //             workout_type: req.params.exercise
    //         }
    //     }).then(function(data) {
    //         var hbsObject = { workoutData: data };
    //         console.log('======== DATA=======', data);
    //         res.render("build", hbsObject);
    //     });
    // });
};