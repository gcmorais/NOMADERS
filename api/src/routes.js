/* eslint-disable import/extensions */
import { Router } from 'express';
import UserController from './app/controllers/UserController.js';

const router = Router();

router.get('/user', UserController.index);

export default router;
