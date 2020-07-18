import { Request, Response, NextFunction } from 'express';
import { Schema } from 'joi';

export const checkValidation = (req: Request, res: Response, next: NextFunction) => {
    if (!req.body.masterPass) {
        res.status(400);
        next(new Error('Non-existing master password in the request body!'));
    } else if (req.body.masterPass !== process.env.MASTER_PASS) {
        res.status(422);
        next(new Error('Invalid master password!'));
    } else {
        delete req.body.masterPass;
        next();
    }
};

export const validateSchema = (schema: Schema) => (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const result = schema.validate(req.body);
    if (result.error) {
        res.status(422);
        next(result.error);
    } else {
        next();
    }
};
