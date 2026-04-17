const express=require('express');
const { dbConnect } = require('./config/dbConnect');
const { router } = require('./routes/user.route');
const { User } = require('./model/user.model');

const app=express()

app.use('/',router)

User.sync()


//     User.sync() - This creates the table if it doesn't exist (and does nothing if it already exists)
// User.sync({ force: true }) - This creates the table, dropping it first if it already existed
// User.sync({ alter: true }) - This checks what is the current state of the table in the database (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.

app.listen(5000,()=>{
    console.log(`PORT IS RUNNING 5000`);
    dbConnect()
})