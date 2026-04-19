const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("Practice1", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = sequelize;