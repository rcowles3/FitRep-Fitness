module.exports = function(sequelize, DataTypes) {
  var workoutData = sequelize.define("workoutData", {
    exercise: DataTypes.STRING,
    weight: DataTypes.INTEGER,
    reps: DataTypes.INTEGER,
    set: DataTypes.INTEGER
  });

  
  return workoutData;
};