import { pool } from '../config/db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async ({ name, email, password }) => {
  // check if user exists
  const exists = await pool.query(
    'SELECT * FROM users WHERE email = $1',
    [email]
  );

  if (exists.rows.length) {
    throw new Error('User already exists');
  }


  const hashed = await bcrypt.hash(password, 10);

  const result = await pool.query(
    'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
    [name, email, hashed]
  );

  return result.rows[0];
};

export const login = async ({ email, password }) => {
  const result = await pool.query(
    'SELECT * FROM users WHERE email = $1',
    [email]
  );

  const user = result.rows[0];
  if (!user) throw new Error('User not found');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid credentials');

  return jwt.sign({ id: user.id }, process.env.JWT_SECRET);
};