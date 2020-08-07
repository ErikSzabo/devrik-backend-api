import { Request, Response, NextFunction } from 'express';
import { Schema } from 'joi';

/**
 * Handles Not Found when user tries to hit an endpoint that is not exists.
 *
 * @param {Request}      req    HTTP request
 * @param {Response}     res    HTTP response
 * @param {NextFunction} next   NEXT function
 */
export const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(404);
  const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
  next(error);
};

/**
 * Handles errors from anywhere.
 *
 * @param {Error}        err    Error
 * @param {Request}      req    HTTP request
 * @param {Response}     res    HTTP response
 * @param {NextFunction} next   NEXT function
 */
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

/**
 * Validates the request body against the given schema.
 *
 * @param {Schema} schema Joi schema
 */
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
