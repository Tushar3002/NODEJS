import * as userService from '../services/user.service.js';

export const getUsers = async (req, res) => {
  const users = await userService.getAll();
  res.json(users);
};
