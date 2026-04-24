import { getUser, loginUser, registerUser } from "../services/auth.service.js";

export const register = async (req, res) => {
  try {
    const data = await registerUser(req.body);

    return res.status(201).json(data);
  } catch (err) {
    if (err.message === "User already exists") {
      return res.status(409).json({ message: err.message });
    }

    return res.status(500).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const data = await loginUser(req.body);

    return res.status(200).json(data);
  } catch (err) {
    if (err.message === "User not found") {
      return res.status(404).json({ message: err.message });
    }

    if (err.message === "Wrong password") {
      return res.status(400).json({ message: err.message });
    }

    return res.status(500).json({ error: err.message });
  }
};

export const getCurrentUser = async (req, res) => {
  try {
    const user = await getUser(req.user.id);
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch user" });
  }
};