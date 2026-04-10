import express, { urlencoded } from 'express'
import { dynamicRoute, searchRoute } from './controller.js'
import router from './route.js'
import multer from 'multer'
import storage from './config/multer.js'


const app=express()
const upload=multer({storage,
    limits:{
        fileSize:1024000
    }
})

app.use(express.json())

app.use(express.urlencoded({extended:true}))
app.use(upload.single('file1'))

app.get('/',(req,res)=>{
    res.send('HOME PAGE')
})
//dynamic route 
app.get('/userData/:username',dynamicRoute)


//dynamic chain
app.get('/things/:name/:id',(req,res)=>{
    const {id,name}=req.params
    if (!/^\d{5}$/.test(id)) {
      return res.status(400).json({ error: 'ID must be exactly 5 digits' });
   }
    res.json({
        id,
        name
    })
})

//Search Route

app.get('/search',searchRoute)

app.use('/user',router)



//POST 
app.post('/users',(req,res)=>{
   const {name,age}=req.body;
   res.json(`Name is ${name} Age is around ${age}`) 
})

//PUT

app.put('/users/:id',(req,res)=>{
    const userId=req.params.id
    const {name,age}=req.body;
    res.json({
        message:`User Updated at ${name} by using ID ${userId}`
    })
})


//Delete

app.delete('/users/:id',(req,res)=>{
    const userId=req.params.id
    res.json({
        message:'User Deleted HAHAHAH'
    })
})

// i am using a middleware urlencoded to get the data
app.post('/form',(req,res)=>{
    console.log(req.body);
    console.log(req.file);
    
    res.send('Form Received') 
})

//Error Route 

app.use((req, res) => {
    res.status(404).send('Sorry, you are in the wrong way')
})

app.listen(3000,()=>{
    console.log('SERVER IS RUNNING SOMEONE CAUGHT HIM');
})