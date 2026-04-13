import * as authService from '../services/auth.service.js';

export const register = async (req, res) => {
  try {
    const user = await authService.register(req.body);
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const token = await authService.login(req.body);
    res.json({ token });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};