const { userDataMapper } = require('../dataMappers');

const jsonwebtoken = require('jsonwebtoken');

const authController = {

    /**
     * 
     * @param {Object} request 
     * @param {Object} response object from express middleware
     * @returns 
     */
    async checkToken(request, response) {

        const authHeader = request.headers['authorization'];

        // if there is an authHeader, we send the second parameter of authHeader (the token), or undefined
        const token = authHeader && authHeader.split(' ')[1];

        // if there is no token, we send a 401 status (unauthorised)
        if (token == null) return response.sendStatus(401);

        // if there is a token, we check it thanks to the verify function
        // it takes as parameters the token to check and the key which was used to generate it, as well as a callback to handle the result

        jsonwebtoken.verify(token, process.env.SECRET_KEY, async (error, decoded) => {
            // in case of error, we send a 403 status which means the token is no longer valid (or wasn't valid in the first place)
            if (error) return response.sendStatus(403);
            // if there is no error, we search for the user by their email and send the json
            const user = await userDataMapper.findById(decoded.email);
            // for security reasons, we delete the password before sending the account information
            delete user.password;
            // we send the information indicating the user's connection status
            user.logged = true;
            response.status(200).json({ user });
        });
    }

};

module.exports = authController;