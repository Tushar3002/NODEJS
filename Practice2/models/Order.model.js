import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";    // i had done this mistake forgot .js that why table was not added to my pgadmin/db


const Order = sequelize.define("Order", {
  totalPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "pending",
  },
   paymentMethod: {
    type: DataTypes.STRING, 
  },

  paymentStatus: {
    type: DataTypes.STRING,
    defaultValue: "pending",
  },

  shippingAddress: {
    type: DataTypes.TEXT,
  },

  deliveredAt: {
    type: DataTypes.DATE,
  },
});

export default Order