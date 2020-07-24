import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { admins } from './auth.model';

const loginHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, password } = req.body;
        const user = await admins.findOne({ username });
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
        // @ts-ignore
        const token = jwt.sign(
            { username: user.username, role: user.role },
            // @ts-ignore
            process.env.TOKEN_SECRET,
            { expiresIn: '24h' }
        );
        res.send(token);
    } catch (error) {
        next(error);
    }
};

export default {
    loginHandler,
};
