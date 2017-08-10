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
            // allowNull: false,
            validate: {
                len: [1, 15]
            }
        },
        last_name: {
            type: DataTypes.STRING,
            // allowNull: false,
            validate: {
                len: [1, 15]
            }
        },
        heightFt: {
            type: DataTypes.INTEGER
                // allowNull: false
        },
        heightIn: {
            type: DataTypes.INTEGER
                // allowNull: false
        },
        weight: {
            type: DataTypes.INTEGER
                // allowNull: false
        },
        age: {
            type: DataTypes.INTEGER
                // allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            isUnique: true,
            // allowNull: false,
            validate: {
                isEmail: true
            }
        },
        username: {
            type: DataTypes.STRING,
            // allowNull: false,
            validate: {
                len: [1, 15]
            }
        },
        pass: {
            type: DataTypes.STRING,
            // allowNull: false,
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
        // When a user is deleted, also delete any associated Posts
        user.hasMany(models.workoutData, {
            onDelete: "cascade"
        });
    }

    return user;
}