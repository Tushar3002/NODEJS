import express from 'express'
import productRouter from './routes/product.route.js'
import cors from 'cors'
import authRouter from './routes/auth.route.js'
import orderRouter from "./routes/order.route.js";
import adminRouter from './routes/admin.route.js';

const app=express()

app.use(express.json())
app.use(cors())
app.use('/api/products',productRouter)

app.use('/api/auth',authRouter)
app.use("/api/orders", orderRouter);
app.use("/api/admin", adminRouter);

export default app