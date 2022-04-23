const Game = require('./game');
const File = require('./file');
const User = require('./user');

/* Associations des models */

// Game <> File
/* File.hasOne(Game, {
    foreignKey: 'file_id',
    as: 'file'
});  */

/* File.belongsTo(Game, {
    foreignKey: 'game_id',
    as: 'game'
}); */

// Game : "un File appartient à un Game"
File.belongsTo(Game, {
    foreignKey: "game_id",
    as: "game"
});

// ...et la réciproque : "un Game possède un File"
Game.belongsTo(File, {
    foreignKey: "file_id",
    as: "file"
});




module.exports = {
    File,
    Game,
    User
};

