// requiring module
const sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {

    // storing our data as a variable with validation
    var workoutData = sequelize.define("workoutData", {
        exercise: DataTypes.STRING,
        weight: DataTypes.INTEGER,
        reps: DataTypes.INTEGER,
        set: DataTypes.INTEGER
    }, {
        timestamps: false
    });


    return workoutData;
};