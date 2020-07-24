// @ts-nocheck

import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const checkValidation = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.header('Authorization')?.split(' ').pop();
        if (!token) {
            next(new Error('Token is required!'));
            return;
        }
        const admin = jwt.verify(token, process.env.TOKEN_SECRET);
        if (admin.role === 'admin') {
            next();
        } else {
            res.status(403);
            next(new Error('No permission!'));
        }
    } catch (error) {
        res.status(403);
        next(new Error('No permission!'));
    }
};
