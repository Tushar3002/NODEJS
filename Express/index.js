import express from 'express'
import { dynamicRoute, searchRoute } from './controller.js'

const app=express()

app.get('/',(req,res)=>{
    res.send('HOME PAGE')
})
//dynamic route 
app.get('/user/:username',dynamicRoute)

//Search Route

app.get('/search',searchRoute)

app.listen(3000,()=>{
    console.log('SERVER IS RUNNING SOMEONE CAUGHT HIM');
    
})