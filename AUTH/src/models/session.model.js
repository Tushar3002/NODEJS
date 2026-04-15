import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const Session = sequelize.define("Session", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },

  userId: {
    type: DataTypes.UUID,
    allowNull: false,
  },

  refreshTokenHash: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Refresh token hash is required",
      },
    },
  },

  ip: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "IP address is required",
      },
    },
  },

  userAgent: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "User agent is required",
      },
    },
  },

  revoked: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },

}, {
  tableName: "sessions",
  timestamps: true,
});

export default Session;