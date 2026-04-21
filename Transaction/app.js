import express from 'express'
import router from './router/user.router.js';
import { dbConnection, sequelize } from './config/db.js';

const app=express()

app.use(express.json());

app.use('/', router)

await sequelize.sync({ alter: true });
// UserModel.sync({force: false})

app.listen(3000, async()=>{
    console.log('Server is listen at port: 3000')
    await dbConnection()
})