import User from "../models/User.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const SECRET = process.env.MY_SECRET;

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log("SECRET:", process.env.MY_SECRET);
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashed,
    });

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.MY_SECRET,
      { expiresIn: "1d" },
    );
    const { password: _, ...userData } = user.toJSON();

    return res.status(201).json({ user: userData, token });
  } catch (err) {
  console.error("REGISTER ERROR:", err);
  return res.status(500).json({ error: err.message });
}
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(404).json({ message: "User not found" });

    const match = await bcrypt.compare(password, user.password);

    if (!match) return res.status(400).json({ message: "Wrong password" });

    const token = jwt.sign({ id: user.id, role: user.role }, SECRET, {
      expiresIn: "1d",
    });

    // res.json({ token });
    const { password: _, ...userData } = user.toJSON();

res.status(200).json({
  token,
  user: userData,
});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
