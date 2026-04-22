import app from './app.js'
import { sequelize } from './config/db.js'
import './models/index.js'

sequelize.sync().then(()=>{
    console.log('Database Connected');
    app.listen(5000,()=>{
        console.log(`Server is running `);
    })
})