const dbConfig = require('../config/dbconfig');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: true,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)

const db = {}

sequelize.authenticate().then(() => {
    console.log(`connected..`);
}).catch(err =>{
    console.log(`Error` + err);
});

db.Sequelize = Sequelize
db.sequelize = sequelize;

db.compound = require('./compound.js')(sequelize, DataTypes)

db.sequelize.sync({force : false}).then(() => {
    console.log('yes, you are connected sucessfully!');
});

module.exports = db;