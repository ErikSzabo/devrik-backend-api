import { Request, Response, NextFunction } from 'express';
import { admins } from './auth.model';

export const loginHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log('teszt');
    } catch (error) {
        next(error);
    }
};
