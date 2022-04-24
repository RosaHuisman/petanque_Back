const database = require('../database');
const { Model, DataTypes } = require('sequelize');

class Game extends Model {};

Game.init({
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    organisator_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Organisator',
            key: 'id'
        }
    }
}, {
    sequelize: database,
    tableName: "game"
});

module.exports = Game;
