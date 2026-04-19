const app = require("./app");
const sequelize = require("./config/db");

sequelize.sync().then(() => {
  console.log("Database connected");

  app.listen(5000, () => {
    console.log("Server running on port 5000");
  });
}); 