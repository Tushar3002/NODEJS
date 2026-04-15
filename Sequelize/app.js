import { Sequelize } from "sequelize";

const sequelize=new Sequelize({
    database:"test",
    username:"postgres",
    password:"root",
    host:"localhost",
    dialect:"postgres"
})

//Test the database Connection 

sequelize
    .authenticate()
    .then(()=>{
        console.log("Connection success");
        
    })
    .catch(err=>{
        console.error(err);
        
    })

//Define a model

const User=sequelize.define('Customer',{
    firstName:{
        type:Sequelize.STRING
    },
    lastName:{
        type:Sequelize.STRING
    },
    Email:{
        type:Sequelize.STRING,
        unique:true
    },
})


//Syncronise the model with database // create table if not exist

sequelize
    .sync()
    .then(()=>{
        console.log('Database Synchronised');
        
    })
    .catch(err=>{
        console.log(err);
        
    })

User.create({
    firstName:"JANA",
    lastName:"Pedro",
    Email:"tj@gmail.com"
}).then(user =>{
    console.log('User Created '  ,user.toJSON());
    
}).catch(err=>{
    console.error(err);
    
})