import { users } from '../data/db.js';

export const getAll = async () => {
  return users;
};