import app from "./src/app.js";

import {connectDB,sequelize} from "./src/config/db.js";

import "./src/models/index.js";

const startServer = async () => {
  await connectDB();

  // sync tables
  await sequelize.sync({ alter: true });

  app.listen(5000, () => {
    console.log(" Server running on port 5000");
  });
};

startServer();