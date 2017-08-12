// requiring module
const sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {

    // storing our data as a variable with validation
    var workoutData = sequelize.define("workoutData", {
        // exercise: DataTypes.STRING,
        weight: DataTypes.INTEGER,
        reps: DataTypes.INTEGER,
        set: DataTypes.INTEGER
    }, {
        timestamps: false
    });

    // Joining of our tables 
    // =======================================
    // We're saying that excercises and workoutData should belong to a user
    // workoutData.associate = function(models) {
    //     // workoutData can't be created without a user due to the foreign key constraint
    //     workoutData.belongsTo(models.user, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    //     // workoutData can contain multiple exercises
    //     // workoutData.hasMany(models.exercises);
    // };
    return workoutData;
};