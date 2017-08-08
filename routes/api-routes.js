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
            });
        })

        // app.post("/", function(req, res) {
        //     db.burger.create(req.body).then(function(allBurgers) {
        //         res.redirect("/");
        //     })
        // })

        // app.put("/:id", function(req, res) {
        //     var eatenBurger = {
        //         DEVOURED: 1
        //     }

        //     db.burger.update(eatenBurger, {
        //         where: {
        //             id: req.params.id
        //         }
        //     }).then(function(allBurgers) {
        //         res.redirect("/");
        //     })
    })
}