const { Sequelize} = require('sequelize');

console.log(process.env.PG_URL)

const sequelize = new Sequelize(process.env.PG_URL,{
    define: {
      timestamps: false
    },
});

module.exports = sequelize;