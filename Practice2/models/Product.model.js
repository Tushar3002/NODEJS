import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";


export const Product=sequelize.define("Product",
    {
        name:{
            type:DataTypes.STRING,
        allowNull:false
        },
        price:{
            type:DataTypes.FLOAT,
            allowNull:false,
        },
        description:{
            type:DataTypes.TEXT
        },
        imageUrl:{
            type:DataTypes.STRING
        },
    }
)