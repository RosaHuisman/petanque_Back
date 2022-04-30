const Sequelize = require('sequelize');

console.log(process.env.PG_URL)

const sequelize = new Sequelize(process.env.PG_URL,{
    define: {
      timestamps: false
    },
    host : "10.0.2.2",
    dialect: "mysql"
});

module.exports = sequelize;