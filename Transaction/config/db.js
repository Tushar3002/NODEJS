import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    // pool: {
    //     max: 5, //up to 5 connections at a time
    //     min: 2, // keep 2 connections always ready
    //     acquire: 30000, // wait up to 30s to get a connection
    //     idle: 10000 //close connection if not used for 10sec
    // }
});

export const dbConnection = async()=>{
    try {
        await sequelize.authenticate();
        console.log('Db connected')
    } catch (error) {
        console.log(`Unable to connect db`, error)
    }
};

