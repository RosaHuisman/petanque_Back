module.exports = {

    /**
     * Showing 404 error
     * @param {Object} _ request not used
     * @param {Object} response 404 response
     */
    notFoundResource(_, response) {
        response.status(404).json({ data: [], error: `Resource not found` });
    }

};