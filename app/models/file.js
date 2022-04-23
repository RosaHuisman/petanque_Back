const database = require('../database');
const { Model, DataTypes } = require('sequelize');

class File extends Model {};

File.init({
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    path: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
}, {
    sequelize: database,
    tableName: "file"
});

module.exports = File;
