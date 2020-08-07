import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { TokenUser } from '../auth/auth.interfaces';

/**
 * Verifies a token while checks for the admin role.
 *
 * @param {Request}      req    HTTP request
 * @param {Response}     res    HTTP response
 * @param {NextFunction} next   NEXT function
 */
export const checkValidation = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header('Authorization')?.split(' ').pop();
    if (!token) return next(new Error('Token is required!'));

    try {
      //@ts-ignore
      const user: TokenUser = jwt.verify(token, process.env.TOKEN_SECRET);
      if (user.role === 'admin') {
        return next();
      } else {
        res.status(403);
        return next(new Error('No permission!'));
      }
    } catch (error) {
      return next(error);
    }
  } catch (error) {
    res.status(403);
    next(new Error('No permission!'));
  }
};
