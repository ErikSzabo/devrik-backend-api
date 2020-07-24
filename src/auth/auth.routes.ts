import { Router } from 'express';
import { validateSchema } from '../middlewares';
import controller from './auth.controller';
import { loginSchema } from './auth.schemas';

const router = Router();

router.post('/login', validateSchema(loginSchema), controller.loginHandler);

export default router;
