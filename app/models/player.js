const database = require('../database');
const { Model, DataTypes } = require('sequelize');

class Player extends Model {};

Player.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    winRounds: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
    },
    pointsRound1: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    pointsRound2: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    pointsRound3: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    scoreRound1: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    scoreRound2: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    scoreRound3: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    totalPoints: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    game_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Game',
            key: 'id'
        }
    }
}, {
    sequelize: database,
    tableName: "player"
});

module.exports = Player;
