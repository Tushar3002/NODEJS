import { pool } from '../config/db.js';

export const getAll = async () => {
  const result = await pool.query('SELECT id, name, email FROM users');
  return result.rows;
};