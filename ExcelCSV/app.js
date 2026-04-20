const express = require('express');
const userRoutes = require('./routes/user.routes');
const { sequelize } = require('../Practice2/config/db');

const app = express();

app.use(express.json());
app.use('/users', userRoutes);

sequelize.sync().then(() => {
  console.log('DB connected');

  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
});