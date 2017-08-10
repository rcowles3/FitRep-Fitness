module.exports = function(sequelize, DataTypes) {
  var exercises = sequelize.define("exercises", {
    workout_type: DataTypes.STRING,
    exercise: {
    	type: DataTypes.STRING,
    	primaryKey: true
    }
  },
  {
  	timestamps: false
  });

  
  return exercises;
};