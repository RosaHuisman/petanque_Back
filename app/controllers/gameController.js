const sequelize = require('../database');
const { Game } = require('../models');

const gameController = {

    getAll: async (req, res, next) => {
        try {

            console.log('getAll');
            const games = await Game.findAll({
                include: [{
                    association: 'file',
                }]
            });

            res.json(games);
                        
        } catch (error) {
            console.trace(error);
            res.status(500).json(error);
        }
    },

   
};

module.exports = gameController;