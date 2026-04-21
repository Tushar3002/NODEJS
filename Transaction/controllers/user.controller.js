import { sequelize } from "../config/db.js";
import { ContactModel } from "../models/contact.model.js";
import { UserModel } from "../models/user.model.js";

export const unmanagedTransaction = async (req, res) => {
  const t = await sequelize.transaction();

  try {
    const newUser = await UserModel.create(
      {
        name: "Tushar",
      },
      {
        transaction: t,
      },
    );

    await ContactModel.create(
      {
        phone: "4878787875",
        userId: newUser.id,
      },
      {
        transaction: t,
      },
    );

    await t.commit();
    console.log("Done Commiting transacation");
    return res.json(newUser);
  } catch (error) {
    console.log("transsactio not successful so roll back");
    await t.rollback();
      return res.status(500).json({ error: error.message });
  }
};

export const managedTransaction = async (req, res) => {
  try {
    let newUser;
    await sequelize.transaction(async (t) => {
      newUser = await UserModel.create(
        {
          name: "Jana",
        },
        {
          transaction: t,
        },
      );
      await ContactModel.create(
        {
          phone: "123",
          userId: newUser.id,
        },
        {
          transaction: t,
        },
      );
    });
    return res.json(newUser)
  } catch (error) {
    console.log("error");
  }
};
