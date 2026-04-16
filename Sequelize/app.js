import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize({
  database: "test",
  username: "postgres",
  password: "root",
  host: "localhost",
  dialect: "postgres"
});

const User = sequelize.define("User", {
  firstName: {
    type: DataTypes.STRING
  },
  lastName: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    validate: {
      isEmail: true
    }
  }
});

const start = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection success");

    await sequelize.sync();
    console.log("Database Synchronised");

    const user = await User.create({
      firstName: "ABC",
      lastName: "Pedro",
      email: "abc@gmail.com"
    });

    console.log("User Created", user.toJSON());

  } catch (err) {
    console.error(err);
  }
};

start();