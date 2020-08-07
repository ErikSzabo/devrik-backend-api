import { Router } from 'express';
import { validateSchema } from '../middlewares';
import controller from './auth.controller';
import { loginSchema, tokenSchema } from './auth.schemas';

const router = Router();

// @route    POST /login
// @desc     Route where users can login and recieve a token
// @access   Public
router.post('/login', validateSchema(loginSchema), controller.loginHandler);

// @route    POST /auth
// @desc     Route where the server can verify a user token
// @access   Public
router.post('/auth', validateSchema(tokenSchema), controller.authHandler);

export default router;
