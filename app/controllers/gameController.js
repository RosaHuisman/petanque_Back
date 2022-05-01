const sequelize = require('../database');

const { Game, Player } = require('../models');

const gameController = {

    getAll: async (req, res, next) => {
        try {

            console.log('getAll');
            const games = await Game.findAll({
            });

            res.json(games);
                        
        } catch (error) {
            console.trace(error);
            res.status(500).json(error);
        }
    },

    create: async (req, res, next) => {
        try {
            console.log('create');
            const game = await Game.create(req.body.game);
            if(!game) {
                return next;
            }
            const players = await Player.findAll();
            const gameId = game.id;
            if(req.body.players && req.body.players.length > 0) {
                for (const player of req.body.players) {
                    player.game_id = gameId;
                    player.id = player.id + players.length;
                    await Player.create(player)
                }
            }

            res.json(game);
        } catch (error) {
            console.trace(error);
            res.status(500).json(error);
        }
    }

   
};

module.exports = gameController;