import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";


const OrderItems = sequelize.define('orderItem',{
    quantity:DataTypes.INTEGER,
    price:DataTypes.FLOAT
})

export default OrderItems