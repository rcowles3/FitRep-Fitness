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
    workoutData.associate = function(models) {
        // workoutData can't be created without a user due to the foreign key constraint
        workoutData.belongsTo(models.user, {
            foreignKey: {
                as: "workout_data",
                name: "user_id",
                allowNull: false
            }
        });

        // workoutData should have multiple Users as participants
        workoutData.belongsToMany(models.user, {
            through: models.exercises,
            foreignKey: {
                name: "workoutData_id",
                allowNull: false
            }
        });
    };
    return workoutData;
};