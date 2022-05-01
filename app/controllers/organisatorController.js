const sequelize = require('../database');

const bcrypt = require('bcrypt');
const emailValidator = require('email-validator');
const jsonwebtoken = require('jsonwebtoken');
const jwtSecret = process.env.SECRET_KEY;

const { Organisator } = require('../models');


const organisatorController = {

    getAll: async (req, res, next) => {
        try {
            const organisators = await Organisator.findAll();
            console.log(organisators);
            res.json(organisators);
                        
        } catch (error) {
            console.trace(error);
            res.status(500).json(error);
        }
    },

    

    /**
     * Logging the user out, deleting their session
     * 
     * @param {*} request 
     * @param {Redirect} response redirect to / after logout
     */
    logout: (request, response) => {
        request.session.destroy();
        response.redirect('/');
    },

};

module.exports = organisatorController;