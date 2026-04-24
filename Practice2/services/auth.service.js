import User from "../models/User.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const SECRET = process.env.MY_SECRET;

export const registerUser = async ({ name, email, password }) => {
  const existingUser = await User.findOne({ where: { email } });

  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashed = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashed,
  });

  const token = jwt.sign(
    { id: user.id, role: user.role },
    SECRET,
    { expiresIn: "1d" }
  );

  const { password: _, ...userData } = user.toJSON();

  return { user: userData, token };
};

export const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });

  if (!user) {
    throw new Error("User not found");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw new Error("Wrong password");
  }

  const token = jwt.sign(
    { id: user.id, role: user.role },
    SECRET,
    { expiresIn: "1d" }
  );

  const { password: _, ...userData } = user.toJSON();

  return { user: userData, token };
};

export const getUser = async(id)=>{
    const user = await User.findOne({where:{id}})
    return user;
}