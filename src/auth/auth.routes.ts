import { Router } from 'express';
import controller from './auth.controller';

const router = Router();

router.post('/login');

export default router;
