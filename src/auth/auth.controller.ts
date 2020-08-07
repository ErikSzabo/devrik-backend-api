import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { admins } from './auth.model';
import { LoginUser, MongoUser, TokenUser, Token } from './auth.interfaces';

/**
 * Handles user / admin login, and sends back a token.
 *
 * @param {Request}      req    HTTP request
 * @param {Response}     res    HTTP response
 * @param {NextFunction} next   NEXT function
 */
const loginHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, password }: LoginUser = req.body;
    const user: MongoUser | undefined = await admins.findOne({ username });
    if (!user) {
      res.status(400);
      next(new Error('Invalid username or password!'));
      return;
    }
    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
      res.status(400);
      next(new Error('Invalid username or password!'));
      return;
    }
    const token = jwt.sign(
      { username: user.username, role: user.role },
      // @ts-ignore
      process.env.TOKEN_SECRET,
      { expiresIn: '12h' }
    );
    res.send(token);
  } catch (error) {
    next(error);
  }
};

/**
 * Verifies a token and sends back its data which is
 * a username and a role.
 *
 * @param {Request}      req    HTTP request
 * @param {Response}     res    HTTP response
 * @param {NextFunction} next   NEXT function
 */
const authHandler = (req: Request, res: Response, next: NextFunction) => {
  const { token }: Token = req.body;
  try {
    // @ts-ignore
    const { username, role }: TokenUser = jwt.verify(token, process.env.TOKEN_SECRET);
    res.json({
      username,
      role,
    });
  } catch (error) {
    return next(error);
  }
};

export default {
  loginHandler,
  authHandler,
};
