import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";
import { UserModel } from "./user.model.js";


export const ContactModel=sequelize.define('contact',{
    phone:{
        type:DataTypes.STRING,
        allowNull:false
    },
    userId:{
        type:DataTypes.INTEGER,
        references:{
            model:UserModel,
            key:'id'
        }

    }
},{
    freezeTableName: true,
    timestamps: true,
})