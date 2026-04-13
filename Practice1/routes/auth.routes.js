import { Router } from 'express';
import { register, login } from '../controllers/auth.controller.js';
import { registerValidator } from '../validators/auth.validator.js';

const router = Router();

router.post('/register', registerValidator, register);
router.post('/login', login);

export default router;

