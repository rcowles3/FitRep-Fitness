const sequelize = require('sequelize');

// creating our sequelize model for our burger queries
module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 15]
            }
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 15]
            }
        },
        heightFt: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        heightIn: DataTypes.INTEGER,
        weight: DataTypes.INTEGER,
        age: DataTypes.INTEGER,
        email: DataTypes.STRING
    });
    return user;
}