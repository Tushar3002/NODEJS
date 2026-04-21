const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbConnect');


const User = sequelize.define(
  'User',
  {
    // Model attributes are defined here
    // firstName: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   defaultValue:'TUSHAR'
    // },
    // lastName: {
    //   type: DataTypes.STRING,
    //   // allowNull defaults to true
    // },
      name: DataTypes.TEXT,
  favoriteColor: {
    type: DataTypes.TEXT,
    defaultValue: 'green',
  },
  age: DataTypes.INTEGER,
  cash: DataTypes.INTEGER,
  },
  {
    // Other model options go here
    // freezeTableName:true ,//model== db table name

    tableName:'users'

  },
);

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true

module.exports={User}