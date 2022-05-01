const { Sequelize } = require('sequelize');

console.log('.env', process.env.DATABASE_URL);
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    "dialect": "postgres",
    "dialectOptions": {
        "ssl": {
            "require": true,
            "rejectUnauthorized": false
        }
    }
});

module.exports = sequelize;