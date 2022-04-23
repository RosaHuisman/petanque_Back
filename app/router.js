const express = require('express');
const gameController = require('./controllers/gameController');
const fileController = require('./controllers/fileController');
const userController = require('./controllers/userController');


const router = express.Router();


router.route('/game')
    .get(gameController.getAll);

router.route('/file')
    .get(fileController.getAll);

router.route('/user')
    .get(userController.getAll);

module.exports = router;
