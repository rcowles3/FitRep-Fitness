module.exports = function(sequelize, DataTypes) {
    var exercises = sequelize.define("exercises", {
        workout_type: DataTypes.STRING,
        exercise: {
            type: DataTypes.STRING,
            primaryKey: true
        }
    }, {
        timestamps: false
    });

    // Joining of our tables 
    // =======================================
    // exercises.associate = function(models) {
    //     // excercises can contain multiple sets of workoutData
    //     exercises.hasMany(models.workoutData, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };
    return exercises;
};