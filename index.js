require('dotenv').config();

const express = require('express');
const router = require('./app/router');
const morgan = require('morgan');
const cors = require('cors');
const sanitizer = require('sanitizer');
const multer = require('multer');

const app = express();

// '*' signifie "tout le monde peut passer"
// ATTENNIO : c'est valable le temps du dev, mais il faudra mettre une valeur plus précise pour le passage en prod
app.use( cors('*') );

app.use( morgan('dev') );

// on utilise un expres.static pour servir tous les fichiers qui sont dans le dossier public
app.use( express.static('public') );


// on oublie pas les MW pour les body !
app.use(express.urlencoded({extended: true}));
const bodyParser = multer();
// on utlise .none() pour dire qu'on attends pas de fichier, uniquement des inputs "classiques" !
app.use( bodyParser.none() );

// on assainit tout le body, avant de le passer au rouet
app.use( (req, res, next) => {
    if (req.body) {
        for (const prop in req.body) {
            req.body[prop] = sanitizer.escape(req.body[prop]);
        }
    }
    next();
});

app.use(router);

/** Express inclus, de base, un middleware 404 qui ressemble à quelque chose comme ça 
 * le moteur de MW de express est fait de telle manière que le 404 soit TOUJOURS à la fin.
 */
// app.use( (req, res) => {
//     res.status(404).send(`Cannot ${req.method} ${req.url}`);
// })

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started, listening on ${PORT}`);
});
