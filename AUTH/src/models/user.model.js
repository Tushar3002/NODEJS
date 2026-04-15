// src/models/user.model.js
import { DataTypes } from "sequelize";
import {sequelize} from "../config/db.js";

const User = sequelize.define("User", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },

  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      name: "unique_username",
      msg: "Username must be unique",
    },
    validate: {
      notEmpty: {
        msg: "Username is required",
      },
    },
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      name: "unique_email",
      msg: "Email must be unique",
    },
    validate: {
      notEmpty: {
        msg: "Email is required",
      },
      isEmail: {
        msg: "Invalid email format",
      },
    },
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Password is required",
      },
    },
  },

}, {
  tableName: "users",
  timestamps: true,
});

export default User;