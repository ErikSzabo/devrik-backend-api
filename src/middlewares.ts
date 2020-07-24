import { Request, Response, NextFunction } from 'express';
import { Schema } from 'joi';

export const notFound = (req: Request, res: Response, next: NextFunction) => {
    res.status(404);
    const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
    next(error);
};

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
    res.status(statusCode);
    res.json({
        error: err.message,
        stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
    });
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
