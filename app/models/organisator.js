const database = require('../database');
const { Model, DataTypes } = require('sequelize');

class Organisator extends Model {};

Organisator.init({
    firstname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
}, {
    sequelize: database,
    tableName: "organisator"
});

module.exports = Organisator;
