module.exports = function(sequelize, DataTypes) {
  var workout = sequelize.define("workout", {
    //Workout Name
    workout_name: DataTypes.STRING,
    workout_type: DataTypes.STRING,
    exercise: DataTypes.STRING
    //weight: DataTypes.

  });

  
  return workout;
};