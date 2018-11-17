const Sequelize = require("sequelize");
const connection = require("../config/connection");

const user = connection.define("user", {
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
});

module.exports = user;
