// requiring module
const sequelize = require('sequelize');

// creating our sequelize model for our burger queries
module.exports = function(sequelize, DataTypes) {

    // storing our user as a variable with validation
    var user = sequelize.define('user', {
        // id: {
        //     type: DataTypes.UUID,
        //     defaultValue: DataTypes.UUIDV1,
        //     primaryKey: true
        // },
        first_name: {
            type: DataTypes.STRING,
            validate: {
                len: [1]
            }
        },
        last_name: {
            type: DataTypes.STRING,
            validate: {
                len: [1]
            }
        },
        heightFt: {
            type: DataTypes.INTEGER,
            validate: {
                len: [1]
            }
        },
        heightIn: {
            type: DataTypes.INTEGER,
            validate: {
                len: [1]
            }
        },
        weight: {
            type: DataTypes.INTEGER,
            validate: {
                len: [1]
            }
        },
        age: {
            type: DataTypes.INTEGER,
            validate: {
                len: [1]
            }
        },
        email: {
            type: DataTypes.STRING,
            isUnique: true,
            validate: {
                isEmail: true
            }
        },
        username: {
            type: DataTypes.STRING,
            validate: {
                len: [1, 15]
            }
        },
        pass: {
            type: DataTypes.STRING,
            validate: {
                len: [1, 15]
            }
        },
    }, {
        timestamps: false
    });

    // Joining of our tables 
    // =======================================
    // Associating users with workouts
    user.associate = function(models) {
        // When a user is deleted, also delete any associated workouts and excercises
        user.hasMany(models.workoutData, {
            as: "workout_data",
            foreignKey: "workout_id",
            onDelete: "cascade"
        });

        user.belongsToMany(models.workoutData, {
            through: models.exercises,
            foreignKey: {
                name: "user_id",
                allowNull: false
            }
        });
    };

    return user;
};