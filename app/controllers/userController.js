
const bcrypt = require('bcrypt');
const emailValidator = require('email-validator');
const jsonwebtoken = require('jsonwebtoken');
const jwtSecret = process.env.SECRET_KEY;

const { User } = require('../models');


const userController = {

    getAll: async (req, res, next) => {
        try {
            const users = await User.findAll();

            res.json(users);
                        
        } catch (error) {
            console.trace(error);
            res.status(500).json(error);
        }
    },

    /**
     * Checking that the login information entered by the user is correct and validate login form
     * 
     * @param {Object} request 
     * @param {Object} response object from express middleware
     */
     checkLogin: async (request, response) => {
        try {
            // get the email from the request.body
            const email = request.body.email;

            // get the password from the request.body
            const password = request.body.password;

            // using emailValidator to check if the email is a valid one
            if (!emailValidator.validate(request.body.email)) {
                return response.status(400).json({ error: "Cet email n'est pas valide." });
            };

            // find the user by their email
            const user = await userDataMapper.findOne(email);

            // in case the user is null, we send an error
            if (user === null) {
                response.status(400).json({ error: "Email ou mot de passe incorrect" });
                return;
            };

            // check if password is valid thanks to bcrypt's compare function
            const pwResult = bcrypt.compareSync(password, user.password);

            // if the password comparison is correct, we move on to the next step
            if (pwResult) {

                // if there is a user, we move on to the next step; if not, we send an error
                if (user) {

                    // we create a jsonwebtoken in order to send information to the client
                    const jwtContent = { userId: user.id, roleId: user.role_id, firstName: user.first_name, lastName: user.last_name };

                    // we pick the algorithm and the duration
                    const jwtOptions = {
                        algorithm: 'HS256',
                        expiresIn: '3h'
                    };

                    // we send a token with the information that the client needs
                    response.status(200).json({
                        logged: true,
                        email: user.email,
                        firstName: user.first_name,
                        lastName: user.last_name,
                        roleId: user.role_id,
                        token: jsonwebtoken.sign(jwtContent, jwtSecret, jwtOptions),
                    });
                } else {
                    response.status(401).json(`401 unauthorized`);
                };

            } else {
                // if the bcrypt password comparison is incorrect, we send an error message
                response.status(401).json({ error: "Mot de passe incorrect" });
            };
        } catch (error) {
            console.error(error);
            response.status(500).json({ error: error.message });
        };
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

module.exports = userController;