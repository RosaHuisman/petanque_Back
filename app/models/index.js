const Game = require('./game');
const Organisator = require('./organisator');
const Player = require('./player');

/* Associations des models */

// Association Game <-> Organisator
Organisator.hasMany(Game, {
    foreignKey: 'organisator_id',
    as: 'games'
});

Game.belongsTo(Organisator, {
    foreignKey: 'organisator_id',
    as: 'organisator'
});

// Association Game <-> Player
Game.hasMany(Player, {
    foreignKey: 'game_id',
    as: 'players'
});

Player.belongsTo(Game, {
    foreignKey: 'game_id',
    as: 'game'
});



module.exports = {
    Player,
    Game,
    Organisator
};

