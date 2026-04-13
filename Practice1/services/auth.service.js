import { users } from '../data/db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async ({ name, email, password }) => {
  const exists = users.find(u => u.email === email);
  if (exists) throw new Error('User already exists');

  const hashed = await bcrypt.hash(password, 10);

  const newUser = {
    id: Date.now().toString(),
    name,
    email,
    password: hashed
  };

  users.push(newUser);
  return newUser;
};

export const login = async ({ email, password }) => {
  const user = users.find(u => u.email === email);
  if (!user) throw new Error('User not found');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid credentials');

  return jwt.sign({ id: user.id }, process.env.JWT_SECRET);
};