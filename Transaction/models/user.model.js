import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

export const UserModel = sequelize.define(
  'user',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  },
);
