const sequelize = require('../database');
const { File } = require('../models');

const fileController = {

    getAll: async (req, res, next) => {
        try {

            console.log('getAll');
            const files = await File.findAll();

            res.json(files);
                        
        } catch (error) {
            console.trace(error);
            res.status(500).json(error);
        }
    },

   
};

module.exports = fileController;