import express from 'express'
import productRouter from './routes/product.route.js'
import cors from 'cors'
import authRouter from './routes/auth.route.js'
const app=express()

app.use(express.json())
app.use(cors())
app.use('/api/products',productRouter)

app.use('/api/auth',authRouter)


export default app