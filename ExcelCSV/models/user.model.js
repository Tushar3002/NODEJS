const { DataTypes } = require('sequelize');
const { sequelize } = require('../../Practice2/config/db');

const User = sequelize.define('User', {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  age: DataTypes.INTEGER
});

module.exports = User;