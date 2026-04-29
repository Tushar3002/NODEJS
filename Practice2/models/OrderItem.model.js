import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";


const OrderItem = sequelize.define("OrderItem", {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  productName: DataTypes.STRING,
  imageUrl: DataTypes.STRING,
});

export default OrderItem