import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const WishList=sequelize.define("WishList",{
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    productId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },    
},
    {
        indexes:[
            {
                unique:true,
                fields:["userId","productId"] // fo rthe unique
            }
        ]
    }
)

export default WishList