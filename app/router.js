const express = require('express');
const gameController = require('./controllers/gameController');
const organisatorController = require('./controllers/organisatorController');
const authController = require('./controllers/authController');


const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.route('/login')
    .post(authController.login);

router.route('/game')
    .get(gameController.getAll)
    .post(gameController.create);

router.route('/organisator')
    .get(organisatorController.getAll);

module.exports = router;
