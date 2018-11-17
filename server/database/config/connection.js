const Sequelize = require('sequelize');
require('env2')('./config.env');

const dbName = process.env.dbName;
const dbUser = process.env.dbUser;
const dbPassword = process.env.dbPassword;

module.exports = new Sequelize(dbName, dbUser, dbPassword, {
  host: process.env.HOST || 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,
  logging: false,
  define: {
    timestamps: false,
  },
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
