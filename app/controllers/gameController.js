const sequelize = require('../database');

const { Game, Player } = require('../models');

const gameController = {

    getAll: async (req, res, next) => {
        try {
            const games = await Game.findAll({
                 include: [{
                    model: Player,
                    as: 'players',
                    association: 'players',
                }],
                order: [['createdAt', 'DESC']],
            });

            res.json(games);
                        
        } catch (error) {
            console.trace(error);
            res.status(500).json(error);
        }
    },

    create: async (req, res, next) => {
        try {
            const game = await Game.create(req.body.game);
            if(!game) {
                return next;
            }
            const gameId = game.id;
            if(req.body.players && req.body.players.length > 0) {
                for (const player of req.body.players) {
                    player.game_id = gameId;
                    await Player.create(player)
                }
            }
            // return game and succes message
            res.json({
                game,
                message: 'Partie enregistrée avec succès',
            });
        } catch (error) {
            console.trace(error);
            res.status(500).json(error);
        }
    }

   
};

module.exports = gameController;